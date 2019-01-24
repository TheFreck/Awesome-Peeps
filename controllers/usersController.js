const db = require("../models");
const passport = require("../config/passport");

var uuidv1 = require("uuid/v1");

// Defining methods for the UsersController
module.exports = {
  //     /*********************/*************//********///*****/////***////////**/////////////*/////////////////////*
  //          GATE KEEPERS 
  //     /*********************/*************//********///*****/////***////////**/////////////*/////////////////////*
  login: (req, res) => {
    console.log("controller login req.body: ", req.body);
    console.log("controller login req.params: ", req.params);
    db.User.findOne(
      {
        email: req.body.username
      },
      (err, user) => {
        console.log("controller user: ", user);
        console.log("controller req.session: ", req.session);
        if (err) throw err;
        if (!user) return res.json("incorrect username");
        console.log("user.checkPassword(req.body.password, user.account_key): ", user.checkPassword(req.body.password, user.account_key));
        if(user.checkPassword(req.body.password, user.account_key)) {
          req.session.user = user
          console.log("req.session after assigning: ", req.session);
          return res.json(req.session);
        }
      }
    )
    // .then(res => {
    //   console.log("login dot then res: ", res)
    //   console.log("login dot then req.session: ", req.session);
    //   res.json(req.session);
    // })
    .catch(err => res.status(422).json(err));
  },
  logout: (req, res) => {
    req.session.destroy(() => {
      // console.log("logged out", res);
      res.json("you've been logged out");
    });
  },
  auth: (req, res) => {
    console.log("is it logged in? ", req.session);
    if(req.session.user != undefined) {
      return res.json(true);
    }else{
      return res.json(false);
    }
  },
  create: (req, res) => {
    req.body.sessionId = req.session.id;
    req.body.uuid = uuidv1();
    db.User.create(req.body)
    .then((dbModel) => {
      req.session.user = dbModel;
      res.json(dbModel)
    })
    .catch(err => res.status(422).json(err));
  },
//     /*********************/*************//********///*****/////***////////**/////////////*/////////////////////*

  findAll: (req, res) => {
    // db.User.find(req.query) 
    db.User.find({ uuid: {$ne: req.session.user.uuid} })
    .sort({ firstName: 1 })
    // .then ({ uuid: {$ne: req.session.user.uuid} })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  updateUser: (req, res) => {
  // console.log("MADE IT")
    //create item then takes the item id and adds it to the users myItems column
    db.User.findOneAndUpdate({uuid: req.params.id}, {$push: { shareWithMe: req.session.user._id }}, { new: true})
    .then((dbModel) => {
        // console.log(dbModel)
        res.json(dbModel) 
    })
    .catch(err => {
      // console.log(err);  
      res.status(422).json(err)
    });
  },
  remove: (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserAndItems: (req, res) => {
    // console.log("i am running now ahhhhhh")
    // console.log("this is our req.session", req.session)
    // console.log("this is req. params", req.params)
    db.User.findOne({uuid: req.session.user.uuid})
    .populate("myItems")
    .then((data) =>{
      // console.log(data)
      res.json(data)
    })
  },
  findFriendsAndItems: (req, res) => {
    // console.log("i am running now ahhhhhh")
    // console.log("this is our req.session", req.session)
    // console.log("this is req. params", req.params)
    db.User.findOne({_id: req.params.id})
    .populate("myItems")
    .then((data) =>{
      // console.log(data)
      res.json(data)
    })
  },
  findShoppingListItems: (req, res) => {
    // console.log("find shopping list items is running!")
    // console.log("this is our req.session", req.session)
    // console.log("this is req. params", req.params)
    db.User.findOne()
    .populate("shoppingListItems")
    .then((data) =>{
      console.log(data)
      res.json(data)
    })
  },
  session: (req, res) => {
    res.json(req.session.user)
  }
};

