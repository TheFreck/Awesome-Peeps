const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uuid: {
    type: Schema.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  account_key: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;