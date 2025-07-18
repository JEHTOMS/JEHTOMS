const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phone: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['tenant', 'landlord', 'agent'],
    required: true
  },
  profileImage: {
    type: String,
    default: ''
  },
  location: {
    state: String,
    city: String,
    address: String
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  bio: {
    type: String,
    default: ''
  },
  preferences: {
    budget: {
      min: Number,
      max: Number
    },
    propertyType: [String],
    location: [String]
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);