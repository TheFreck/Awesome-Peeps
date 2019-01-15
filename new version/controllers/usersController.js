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
    //create item then takes the item id and adds it to the users myItems column
    db.User.findByIdAndUpdate({uuid: "8f5bf630-16d3-11e9-9c3c-3de35eaba832"}
    ,{$push: {shareWithMe: "8f5bf630-16d3-11e9-9c3c-3de35eaba832"}})
  
    .then((dbModel) => {
        console.log("SLDKJFKLSDJF", dbModel)
    })
      .then((dbModel) => {
          
          console.log("ZZZZZZZZZZZZZZ", dbModel)
          res.json(dbModel)          
        })
      .catch(err => res.status(422).json(err)
    );
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
    db.User.findOne({uuid: req.session.user.uuid})
    .populate("myItems")
    .then((data) =>{
      console.log(data)
      res.json(data)
    })
  }
};
