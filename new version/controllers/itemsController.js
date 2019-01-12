const db = require("../models");

// Defining methods for the ItemsController
module.exports = {
  //NEW
  //find user who is logged in db.User
  //find the myItems array in db.User
  //display item data using the id numbers in the myItems
//   findUserItems: function(req, res) {
//     console.log("BLAH", req.body.uuid)
//     db.User.findById({uuid: req.body.uuid}, {$all: { myItems: dbModel._id}}, {new: true})
    
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
  findAll: function(req, res) {
    db.Item.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Item.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    //create item then takes the item id and adds it to the users myItems column
    db.Item
      .create(req.body)
      .then((dbModel) => {
        console.log("controller req:", req.body.uuid  )
        db.User.findOneAndUpdate({uuid: req.body.uuid}, {$push: { myItems: dbModel._id}}, { new: true })
        .then((dbModel) => {
          console.log(dbModel)
          res.json(dbModel)          
        })
        .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Item.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


//
//find user logged in from db.User
//look in myItems array and find id of items
//find associated items from db.Item
//display to screen

//db.Item -- find items that matched ID's in db.user myItem[]
