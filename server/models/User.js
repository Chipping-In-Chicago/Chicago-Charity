// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  itemsDonating: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
