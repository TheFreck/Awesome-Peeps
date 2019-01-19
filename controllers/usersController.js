const db = require("../models");
const passport = require("../config/passport");

var uuidv1 = require("uuid/v1");

// Defining methods for the UsersController
module.exports = {
  findAll: (req, res) => {
    // db.User.find(req.query) 
    db.User.find({ uuid: {$ne: req.session.user.uuid} })
      .sort({ firstName: 1 })
      // .then ({ uuid: {$ne: req.session.user.uuid} })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },
  
  login: (req, res) => {
    console.log("req.session: ", req.session);
    console.log("controller username: ", req.body.username);
    console.log("controller password: ", req.body.password);
    console.log("controller req.body: ", req.body);
    db.User.findOne(
      {
        email: req.body.username
      },
      (err, user) => {
        console.log("controller user: ", user);
        req.session.user = user
        if (err) throw err;
        if (!user) return res.json("incorrect username");
        return user.checkPassword(req.body.password, user.account_key);

        // if (!user.checkPassword(req.body.password, user.account_key)) {
        //   console.log("failed!!!", user);
        //   res.json(false);
        // }
        // if (user.checkPassword(req.body.password, user.account_key)) {
        //   console.log("passed!!!", user);
        //   req.body.sessionId = req.session.id;
        //   res.json(true);
        // }
        // return null, user;
      }
    )
      .then(dbModel => {
        console.log("dbModel: ", dbModel);
        res.json(dbModel);
      })
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

updateUser: (req, res) => {
  console.log("MADE IT")
    //create item then takes the item id and adds it to the users myItems column
    db.User.findOneAndUpdate({uuid: req.params.id}, {$push: { shareWithMe: req.session.user._id }}, { new: true})
  
    .then((dbModel) => {
        console.log(dbModel)
        res.json(dbModel) 
    })
    .catch(err => {
      console.log(err);  
      res.status(422).json(err)
    });
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
    console.log("this is our req.session", req.session)
    console.log("this is req. params", req.params)
    db.User.findOne({uuid: req.session.user.uuid}  )
    .populate("myItems")
    .then((data) =>{
      console.log(data)
      res.json(data)
    })
  },
  findFriendsAndItems: (req, res) => {
    console.log("i am running now ahhhhhh")
    console.log("this is our req.session", req.session)
    console.log("this is req. params", req.params)
    db.User.findOne({_id: req.params.id})
    .populate("myItems")
    .then((data) =>{
      console.log(data)
      res.json(data)
    })
  }
};
