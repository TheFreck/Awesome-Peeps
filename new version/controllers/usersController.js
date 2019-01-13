const db = require("../models");
const passport = require("../config/passport");

var uuidv1 = require("uuid/v1");

// Defining methods for the UsersController
module.exports = {
  findAll: (req, res) => {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: (req, res) => {
    db.User.findOne(
      {
        email: req.body.username
      },
      (err, user) => {
        console.log("controller user: ", user);
        if(err) return err;
        if(!user) return res.json("incorrect username");
        const pwrdCheck = user.checkPassword(req.body.password, user.account_key);
        if(!pwrdCheck) {
          console.log("failed!!!");
          // res.redirect("/");
          return res.json(false);
        }
        if(pwrdCheck) {
          console.log("passed!!!", user);
          req.body.sessionId = req.session.id;
          // res.redirect("/landing")
          return user;
        }
        return null, user;
      }
    )
  },
  create: (req, res) => {
    req.body.sessionId = req.session.id;
    console.log("req.session.id: ", req.session.id);
    req.body.uuid = uuidv1();
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log("hit the update: ", req.body);
    // db.User.findOneAndUpdate({ uuid: req.params.id }, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // grabInfoFromButton: (req, res) => {
  //   console.log("grabbed it: ", req.body);
  // },
  findUserAndItems: (req, res) => {
    console.log("i am running now ahhhhhh")
    console.log(req.session, "this is the user")
    db.User.findOne({uuid: req.session.id})
    .populate("myItems")
    .then((data) =>{
      res.json(data)
    })
  }
};


// loggedIn: (req, res) => {
//   db.User.findById({ uuid: req.body.uuid })
//   .then
// }
