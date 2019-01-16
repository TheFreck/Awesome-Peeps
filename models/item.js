const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  occasion: {
    type: String,
    required: false
  },
  date_added: {
    type: Date,
    required: true,
    default: Date.now
  },
  comments: {
    type: String,
    required: false,
  }
  
  
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;