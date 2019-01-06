const db = require("../models");

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
  findById: (req, res) => {
    console.log("controller username: ", req.body.username);
    console.log("controller password: ", req.body.password);
    db.User
      .findOne({
        profile: {
          email: req.body.username
        }
      })
      .then(dbModel => {
        console.log("dbModel: ", dbModel);
        db.User.checkPassword(req.body.password)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    req.body.login.sessionId = req.session.id;
    req.body.login.uuid = uuidv1();
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
