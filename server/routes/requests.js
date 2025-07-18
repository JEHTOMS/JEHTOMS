const express = require('express');
const { body, validationResult } = require('express-validator');
const Request = require('../models/Request');
const User = require('../models/User');
const Property = require('../models/Property');
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

// Get all active requests with filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      state,
      city,
      area,
      propertyType,
      minBudget,
      maxBudget,
      urgency,
      status = 'active',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = { status };

    if (state) filter['preferredLocation.states'] = new RegExp(state, 'i');
    if (city) filter['preferredLocation.cities'] = new RegExp(city, 'i');
    if (area) filter['preferredLocation.areas'] = new RegExp(area, 'i');
    if (propertyType) filter.propertyType = { $in: [propertyType] };
    if (urgency) filter.urgency = urgency;

    // Budget filter
    if (minBudget || maxBudget) {
      filter.$and = [];
      if (minBudget) filter.$and.push({ 'budget.max': { $gte: parseInt(minBudget) } });
      if (maxBudget) filter.$and.push({ 'budget.min': { $lte: parseInt(maxBudget) } });
    }

    // Sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const requests = await Request.find(filter)
      .populate('tenant', 'name phone email profileImage')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Request.countDocuments(filter);

    res.json({
      success: true,
      requests,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalRequests: total,
        hasNext: skip + parseInt(limit) < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching requests' 
    });
  }
});

// Get single request by ID
router.get('/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id)
      .populate('tenant', 'name phone email profileImage bio')
      .populate('responses.landlord', 'name phone email profileImage')
      .populate('responses.property', 'title price location features images');

    if (!request) {
      return res.status(404).json({ 
        success: false, 
        message: 'Request not found' 
      });
    }

    // Increment views
    request.views += 1;
    await request.save();

    res.json({
      success: true,
      request
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching request' 
    });
  }
});

// Create new request (tenant only)
router.post('/', authenticateUser, [
  body('title').trim().isLength({ min: 10 }).withMessage('Title must be at least 10 characters'),
  body('description').trim().isLength({ min: 30 }).withMessage('Description must be at least 30 characters'),
  body('budget.min').isNumeric().withMessage('Minimum budget must be a number'),
  body('budget.max').isNumeric().withMessage('Maximum budget must be a number'),
  body('moveInDate').isISO8601().withMessage('Please provide a valid move-in date'),
  body('preferredLocation.states').isArray({ min: 1 }).withMessage('At least one preferred state is required')
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

    // Check if user is tenant
    if (req.user.userType !== 'tenant') {
      return res.status(403).json({ 
        success: false, 
        message: 'Only tenants can create apartment requests' 
      });
    }

    // Validate budget
    if (req.body.budget.min >= req.body.budget.max) {
      return res.status(400).json({ 
        success: false, 
        message: 'Minimum budget must be less than maximum budget' 
      });
    }

    const requestData = {
      ...req.body,
      tenant: req.user._id
    };

    const request = new Request(requestData);
    await request.save();

    const populatedRequest = await Request.findById(request._id)
      .populate('tenant', 'name phone email profileImage');

    res.status(201).json({
      success: true,
      message: 'Request created successfully',
      request: populatedRequest
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error creating request' 
    });
  }
});

// Update request (tenant only)
router.put('/:id', authenticateUser, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ 
        success: false, 
        message: 'Request not found' 
      });
    }

    // Check if user owns the request
    if (request.tenant.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to update this request' 
      });
    }

    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('tenant', 'name phone email profileImage');

    res.json({
      success: true,
      message: 'Request updated successfully',
      request: updatedRequest
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error updating request' 
    });
  }
});

// Delete request (tenant only)
router.delete('/:id', authenticateUser, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ 
        success: false, 
        message: 'Request not found' 
      });
    }

    // Check if user owns the request
    if (request.tenant.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to delete this request' 
      });
    }

    await Request.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Request deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error deleting request' 
    });
  }
});

// Respond to request (landlord/agent only)
router.post('/:id/respond', authenticateUser, [
  body('message').trim().isLength({ min: 10 }).withMessage('Response message must be at least 10 characters'),
  body('contactInfo.phone').optional().isMobilePhone().withMessage('Please provide a valid phone number'),
  body('contactInfo.email').optional().isEmail().withMessage('Please provide a valid email')
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
        message: 'Only landlords and agents can respond to requests' 
      });
    }

    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ 
        success: false, 
        message: 'Request not found' 
      });
    }

    if (request.status !== 'active') {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot respond to inactive requests' 
      });
    }

    // Check if property exists (if provided)
    if (req.body.property) {
      const property = await Property.findById(req.body.property);
      if (!property) {
        return res.status(404).json({ 
          success: false, 
          message: 'Property not found' 
        });
      }
    }

    const response = {
      landlord: req.user._id,
      property: req.body.property,
      message: req.body.message,
      contactInfo: req.body.contactInfo || {
        phone: req.user.phone,
        email: req.user.email
      }
    };

    request.responses.push(response);
    await request.save();

    const populatedRequest = await Request.findById(request._id)
      .populate('tenant', 'name phone email profileImage')
      .populate('responses.landlord', 'name phone email profileImage')
      .populate('responses.property', 'title price location features images');

    res.json({
      success: true,
      message: 'Response sent successfully',
      request: populatedRequest
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error sending response' 
    });
  }
});

// Get user's requests (tenant only)
router.get('/user/my-requests', authenticateUser, async (req, res) => {
  try {
    if (req.user.userType !== 'tenant') {
      return res.status(403).json({ 
        success: false, 
        message: 'Only tenants can view their requests' 
      });
    }

    const requests = await Request.find({ tenant: req.user._id })
      .populate('tenant', 'name phone email profileImage')
      .populate('responses.landlord', 'name phone email profileImage')
      .populate('responses.property', 'title price location features images')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      requests
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching user requests' 
    });
  }
});

// Get responses to user's properties (landlord/agent)
router.get('/user/my-responses', authenticateUser, async (req, res) => {
  try {
    if (!['landlord', 'agent'].includes(req.user.userType)) {
      return res.status(403).json({ 
        success: false, 
        message: 'Only landlords and agents can view responses' 
      });
    }

    const requests = await Request.find({
      'responses.landlord': req.user._id
    })
    .populate('tenant', 'name phone email profileImage')
    .populate('responses.landlord', 'name phone email profileImage')
    .populate('responses.property', 'title price location features images')
    .sort({ 'responses.createdAt': -1 });

    res.json({
      success: true,
      requests
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching responses' 
    });
  }
});

module.exports = router;