const db = require("../models");

// Defining methods for the ItemsController
module.exports = {

  findAll: function(req, res) {
    db.Item.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("itemsController findById req.params.id: ", req.params.id);
    db.Item.findById(req.params.id)
      .then(dbModel => {
        console.log("itemsController dbModel: ", dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    //create item then takes the item id and adds it to the users myItems column
    db.Item
      .create(req.body)
      .then((dbModel) => {
        // console.log("controller req:", req.body.uuid  )
        db.User.findOneAndUpdate({uuid: req.body.uuid}, {$push: { myItems: dbModel._id}}, { new: true })
        .then((dbModel) => {
          // console.log(dbModel)
          res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, {$set: req.body}, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Item.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addTolist: function(req, res) {
    //create item then takes the item id and adds it to the users myItems column
    console.log("item id:", req.body.itemId)
    db.User.findOneAndUpdate({
        uuid: req.session.user.uuid
      }, {
        $push: {
          shoppingListItems: req.body.itemId
        }
      }, {
        new: true
      })
      .then((dbModel) => {
        // console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  removeFromGeneralList: (req, res) => {
    let itemId = req.body.itemId;
    console.log("remove from gen list itemId: ", itemId);
    db.Item.findOneAndUpdate({
      _id: itemId
    },
    {
      inList: true
    })
    .then(res => {
      console.log("remove from gen list res: ", res);
    })
  }
};