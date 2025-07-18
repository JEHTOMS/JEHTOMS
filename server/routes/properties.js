const express = require('express');
const { body, validationResult } = require('express-validator');
const Property = require('../models/Property');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'naija-rentals-secret');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid token' 
    });
  }
};

// Get all properties with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      state,
      city,
      area,
      propertyType,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms,
      furnished,
      status = 'available',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = { status };

    if (state) filter['location.state'] = new RegExp(state, 'i');
    if (city) filter['location.city'] = new RegExp(city, 'i');
    if (area) filter['location.area'] = new RegExp(area, 'i');
    if (propertyType) filter.propertyType = propertyType;
    if (bedrooms) filter['features.bedrooms'] = { $gte: parseInt(bedrooms) };
    if (bathrooms) filter['features.bathrooms'] = { $gte: parseInt(bathrooms) };
    if (furnished) filter.furnished = furnished;

    // Price filter
    if (minPrice || maxPrice) {
      filter['price.amount'] = {};
      if (minPrice) filter['price.amount'].$gte = parseInt(minPrice);
      if (maxPrice) filter['price.amount'].$lte = parseInt(maxPrice);
    }

    // Sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const properties = await Property.find(filter)
      .populate('landlord', 'name phone email')
      .populate('agent', 'name phone email')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Property.countDocuments(filter);

    res.json({
      success: true,
      properties,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalProperties: total,
        hasNext: skip + parseInt(limit) < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching properties' 
    });
  }
});

// Get single property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate('landlord', 'name phone email profileImage bio')
      .populate('agent', 'name phone email profileImage bio');

    if (!property) {
      return res.status(404).json({ 
        success: false, 
        message: 'Property not found' 
      });
    }

    // Increment views
    property.views += 1;
    await property.save();

    res.json({
      success: true,
      property
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching property' 
    });
  }
});

// Create new property
router.post('/', authenticateUser, [
  body('title').trim().isLength({ min: 10 }).withMessage('Title must be at least 10 characters'),
  body('description').trim().isLength({ min: 50 }).withMessage('Description must be at least 50 characters'),
  body('propertyType').isIn(['apartment', 'house', 'duplex', 'bungalow', 'flat', 'studio', 'penthouse']).withMessage('Invalid property type'),
  body('price.amount').isNumeric().withMessage('Price must be a number'),
  body('location.state').notEmpty().withMessage('State is required'),
  body('location.city').notEmpty().withMessage('City is required'),
  body('location.area').notEmpty().withMessage('Area is required'),
  body('location.address').notEmpty().withMessage('Address is required'),
  body('features.bedrooms').isInt({ min: 0 }).withMessage('Bedrooms must be a valid number'),
  body('features.bathrooms').isInt({ min: 1 }).withMessage('At least 1 bathroom is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    // Check if user is landlord or agent
    if (!['landlord', 'agent'].includes(req.user.userType)) {
      return res.status(403).json({ 
        success: false, 
        message: 'Only landlords and agents can create properties' 
      });
    }

    const propertyData = {
      ...req.body,
      landlord: req.user.userType === 'landlord' ? req.user._id : req.body.landlord,
      agent: req.user.userType === 'agent' ? req.user._id : req.body.agent
    };

    const property = new Property(propertyData);
    await property.save();

    const populatedProperty = await Property.findById(property._id)
      .populate('landlord', 'name phone email')
      .populate('agent', 'name phone email');

    res.status(201).json({
      success: true,
      message: 'Property created successfully',
      property: populatedProperty
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error creating property' 
    });
  }
});

// Update property
router.put('/:id', authenticateUser, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ 
        success: false, 
        message: 'Property not found' 
      });
    }

    // Check if user owns the property
    const isOwner = property.landlord.toString() === req.user._id.toString() || 
                   property.agent?.toString() === req.user._id.toString();

    if (!isOwner) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to update this property' 
      });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('landlord', 'name phone email')
     .populate('agent', 'name phone email');

    res.json({
      success: true,
      message: 'Property updated successfully',
      property: updatedProperty
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error updating property' 
    });
  }
});

// Delete property
router.delete('/:id', authenticateUser, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ 
        success: false, 
        message: 'Property not found' 
      });
    }

    // Check if user owns the property
    const isOwner = property.landlord.toString() === req.user._id.toString() || 
                   property.agent?.toString() === req.user._id.toString();

    if (!isOwner) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to delete this property' 
      });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Property deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error deleting property' 
    });
  }
});

// Get user's properties
router.get('/user/my-properties', authenticateUser, async (req, res) => {
  try {
    const filter = {};
    if (req.user.userType === 'landlord') {
      filter.landlord = req.user._id;
    } else if (req.user.userType === 'agent') {
      filter.agent = req.user._id;
    } else {
      return res.status(403).json({ 
        success: false, 
        message: 'Only landlords and agents can view properties' 
      });
    }

    const properties = await Property.find(filter)
      .populate('landlord', 'name phone email')
      .populate('agent', 'name phone email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      properties
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching user properties' 
    });
  }
});

module.exports = router;