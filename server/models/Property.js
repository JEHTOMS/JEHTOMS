const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    enum: ['apartment', 'house', 'duplex', 'bungalow', 'flat', 'studio', 'penthouse'],
    required: true
  },
  price: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'NGN'
    },
    period: {
      type: String,
      enum: ['monthly', 'yearly'],
      default: 'yearly'
    }
  },
  location: {
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  features: {
    bedrooms: {
      type: Number,
      required: true
    },
    bathrooms: {
      type: Number,
      required: true
    },
    toilets: {
      type: Number,
      default: 0
    },
    parking: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ''
    }
  },
  amenities: [{
    type: String
  }],
  images: [{
    url: String,
    caption: String
  }],
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['available', 'rented', 'pending', 'inactive'],
    default: 'available'
  },
  furnished: {
    type: String,
    enum: ['furnished', 'semi-furnished', 'unfurnished'],
    default: 'unfurnished'
  },
  utilities: {
    electricity: Boolean,
    water: Boolean,
    gas: Boolean,
    internet: Boolean,
    security: Boolean,
    generator: Boolean
  },
  rules: {
    petsAllowed: Boolean,
    smokingAllowed: Boolean,
    partiesAllowed: Boolean
  },
  contactInfo: {
    phone: String,
    email: String,
    whatsapp: String
  },
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for location-based searches
propertySchema.index({ 'location.state': 1, 'location.city': 1, 'location.area': 1 });
propertySchema.index({ 'price.amount': 1 });
propertySchema.index({ propertyType: 1 });
propertySchema.index({ status: 1 });

module.exports = mongoose.model('Property', propertySchema);