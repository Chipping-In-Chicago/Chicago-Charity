// server/models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  itemCount: {
    type: Number,
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;