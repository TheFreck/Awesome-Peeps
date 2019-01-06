const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uuidv1 = require("uuid/v1");
var bcrypt = require("bcryptjs");

const userSchema = new Schema({
  login: {
    type: {
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

userSchema.methods = {
  checkPassword: inputPassword => {
    return bcrypt.compareSync(inputPassword, this.login.account_key)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

userSchema.pre('save', function (next) {
  // console.log("model this: ", this);
  if (!this.login.account_key) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save', uuidv1());
    this.login.account_key = this.hashPassword(this.login.account_key)
    console.log("model account_key: ", this);
    next()
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;