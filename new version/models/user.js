const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {
    type: {
      uuid: {
        type: Schema.ObjectId,
        required: false
      },
      account_key: {
        type: String,
        required: false
      }
    }
  },
  profile: {
    type: {
      email: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      pic: {
        type: String,
        required: false
      }
    }
  },
  notes: {
    type: String,
    required: false
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;