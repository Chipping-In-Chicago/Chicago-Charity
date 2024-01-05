// server/models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  }],
  address: {
    type: String,
  },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
