const db = require("../models");
const passport = require("../config/passport")

var uuidv1 = require("uuid/v1");

// Defining methods for the UsersController
module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: (req, res) => {
    console.log("controller username: ", req.body.username);
    console.log("controller password: ", req.body.password);
    console.log("controller req.body: ", req.body);
    db.User
      .findOne({
        email: req.body.username 
      }, (err, user) => {
        console.log("controller user: ", user);
        if(err) throw err;
        if(!user) return res.json("incorrect username");
        return user.checkPassword(req.body.password, user.account_key)

        if(!user.checkPassword(req.body.password, user.account_key)) {
          console.log("failed!!!", user)
          res.json(false);
        };
        if(user.checkPassword(req.body.password, user.account_key)) {
          console.log("passed!!!", user)
          req.body.sessionId = req.session.id;
          res.json(true);
        };
        return (null, user);
      })
      .then(dbModel => {
        console.log("dbModel: ", dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    req.body.sessionId = req.session.id;
    req.body.uuid = uuidv1();
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
