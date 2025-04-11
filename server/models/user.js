const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'journalist', // Journalist role by default, admin can change later
  },
  isApproved: {
    type: Boolean,
    default: false, // User approval status (admin will approve users)
  },
});

module.exports = mongoose.model('User', UserSchema);
