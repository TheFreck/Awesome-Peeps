const db = require("../models");
const passport = require("../config/passport");
const userController = require("../controllers/usersController")

var uuidv1 = require("uuid/v1");

// Defining methods for the UsersController
module.exports = {
  findAll: (req, res) => {
    db.User.findOne(req.query)
      
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
 
  create: (req, res) => {
    req.body.sessionId = req.session.id;
    console.log("req.session.id: ", req.session.id);
    req.body.uuid = uuidv1();
    db.User.create(req.body)
      .then((dbModel) => {
        console.log("", dbModel)
        req.session.user = dbModel;
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log("hit the update: ", req.body);
    // db.User.findOneAndUpdate({ uuid: req.params.id }, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },



updateUser: function(req, res) {
    //create item then takes the item id and adds it to the users myItems column
    db.User.findOneAndUpdate({uuid: "6b26db90-16d3-11e9-9c3c-3de35eaba832"}, {$push: { sharedWithOthers: "6b26db90-16d3-11e9-9c3c-3de35eaba832" }}, { new: true})
        .then((dbModel) => {
          res.json(dbModel)          
        })
      .catch(err => res.status(422).json(err));
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
  
};
