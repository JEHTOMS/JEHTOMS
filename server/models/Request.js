const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  budget: {
    min: {
      type: Number,
      required: true
    },
    max: {
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
  preferredLocation: {
    states: [{
      type: String
    }],
    cities: [{
      type: String
    }],
    areas: [{
      type: String
    }]
  },
  propertyType: [{
    type: String,
    enum: ['apartment', 'house', 'duplex', 'bungalow', 'flat', 'studio', 'penthouse']
  }],
  requirements: {
    minBedrooms: {
      type: Number,
      default: 1
    },
    minBathrooms: {
      type: Number,
      default: 1
    },
    parking: {
      type: Boolean,
      default: false
    },
    furnished: {
      type: String,
      enum: ['any', 'furnished', 'semi-furnished', 'unfurnished'],
      default: 'any'
    }
  },
  amenities: [{
    type: String
  }],
  moveInDate: {
    type: Date,
    required: true
  },
  duration: {
    type: String,
    enum: ['short-term', 'long-term', 'flexible'],
    default: 'long-term'
  },
  contactInfo: {
    phone: String,
    email: String,
    whatsapp: String
  },
  status: {
    type: String,
    enum: ['active', 'fulfilled', 'expired', 'inactive'],
    default: 'active'
  },
  urgency: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  additionalInfo: {
    occupation: String,
    familySize: Number,
    petsOwner: Boolean,
    smoker: Boolean,
    references: Boolean
  },
  responses: [{
    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property'
    },
    message: String,
    contactInfo: {
      phone: String,
      email: String,
      whatsapp: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  views: {
    type: Number,
    default: 0
  },
  expiresAt: {
    type: Date,
    default: function() {
      return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
    }
  }
}, {
  timestamps: true
});

// Index for search optimization
requestSchema.index({ status: 1 });
requestSchema.index({ 'budget.min': 1, 'budget.max': 1 });
requestSchema.index({ 'preferredLocation.states': 1 });
requestSchema.index({ 'preferredLocation.cities': 1 });
requestSchema.index({ propertyType: 1 });
requestSchema.index({ expiresAt: 1 });

module.exports = mongoose.model('Request', requestSchema);