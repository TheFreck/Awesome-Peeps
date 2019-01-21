const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuidv1 = require("uuid/v1");
const bcrypt = require("bcryptjs");


const userSchema = new Schema({
  uuid: {
    type: String,
    required: false,
    default: uuidv1()
  },
  account_key: {
    type: String,
    required: false
  },
  sessionId: {
    type: String,
    required: false,
    default: "asdf"
  },
  email: {
    type: String,
    required: false
  },
  screenName: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
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
  },
  shareWithMe: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "User"
  }],
  shareWithOthers: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "User"
  }],
  myItems: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Item"
  }],
  shoppingListItems: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Item"
  }],
  notes: {
    type: String,
    required: false
  },
  resetPasswordToken: {
    type: String,
    require: false
  },
  resetPasswordExpires: {
    type: String,
    require: false
  }
})

userSchema.methods = {
  checkPassword: (inputPassword, checkPassword) => {
    console.log("inputPassword: ", inputPassword);
    console.log("this.login.account_key: ", checkPassword);
    return bcrypt.compareSync(inputPassword, checkPassword)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

userSchema.pre('save', function (next) {
  // console.log("model this: ", this);
  if (!this.account_key) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.account_key = this.hashPassword(this.account_key)
    // console.log("model account_key: ", this);
    next()
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;

