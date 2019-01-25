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
  },
  inList: {
    type: Boolean,
    require: true,
    default: false
  },
  userItem: {
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "User"
  }
  
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;