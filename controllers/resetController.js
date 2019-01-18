const bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');
var crypto = require('crypto');
var db = require('../models');

module.exports = {
  forgot: function (req, res, next) {
    console.log("ResetPasswordCtrl forgot hit: ", req.params.email);
    new Promise((resolve, reject) => {
      // generate reset token
      crypto.randomBytes(20, (err, buf) => {
        if (err) return reject(err);
        const token = buf.toString('hex');
        console.log("token: ", token);
        resolve(token);
      });
    })
    .then((token) => {
      console.log("then token: ", token);
      return new Promise((resolve, reject) => {
        // search for user with the given email
        db.User.findOne(
          {
            email: req.params.email
          }
        )
        .then(userObj => {
          console.log("userObj: ", userObj);
          console.log("req.params.email: ", req.params.email);
          if (!userObj) return reject(404);
          // user exists, assign token with expiration date
          const resetPasswordToken = token;
          const resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

          // save the user model with the newly added
          // token and expiration date
          db.User.update(
            {
              email: req.params.email
            },
            {
              resetPasswordToken,
              resetPasswordExpires
            })
            .then(val => {
               console.log("val: ", val);
               console.log("resetPasswordToken: ", resetPasswordToken);
               console.log("resetPasswordExpires: ", resetPasswordExpires);
               console.log("after updating the db userObj: ", userObj)
              // if (!val) return reject(err);
              resolve({
                user: userObj,
                token
              });
            });
        });
      });
    })
    .then((user) => {
      console.log("user: ", user);
      return new Promise((resolve, reject) => {
        const gmailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "bastards.of.greed@gmail.com",
            /////////////////add config file to pull in password
            pass: "aLetterandthenumber1"
          }
        });

        var mailOptions = {
          to: user.user.email,
          from: '"from one greedy bastard to another" <bastards.of.greed@gmail.com>',
          subject: 'greedy bastards Password Reset',
          text: 'You are receiving this because you (or someone else, maybe someone you know) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/api/reset/' + user.token + '\n\n' +
          'If you or someone you know did not request this, please ignore this email and your password will remain unchanged.\n'
        }

        gmailTransporter.sendMail(mailOptions, err => {
          if (err) {
            console.log("mailOptions: ", mailOptions);
            console.log("transporter error: ", err);
            return reject(err);
          }

          resolve();
        });
      });
    })
    .then(() => {
      console.log('WORKED!!!!!!');
      res.status(200).send("yeah!!!!")
    })
    .catch((err) => {
      //check if the error is the one from the DB where the user was not found
      if (err == 404) {
        return res.sendStatus(404);
      }
      console.log('ahhh shit');
      return res.status(500).send(err);
    });
  },
  checkToken: (req, res) => {
    console.log("req.params.token: ", req.params.token);
    db.User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: {
        $gt: Date.now()
      }
    })
    .then(function (user) {
      console.log(user, "this is reset user data");
      if (!user && typeof user === "object") {
        res.send({
          email: user.dataValues.email,
          tokenStatus: "expired"
        });
      } else {
        res.send({
          email: user.dataValues.email,
          tokenStatus: "success"
        });
      }
    })
    .catch(err => console.log("checkToken err: ", err));
  },
  resetPassword: (req, res) => {
    console.log("resetPassword: ", req.params);
    new Promise((resolve, reject) => {
      // search for user with the given email
      db.User.findOne({ email: req.body.email })
      .then((userObj) => {
        const resetPassword = req.body.password
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(resetPassword, salt, function (err, hash) {
            // Store hash in your password DB.
            // save the user model with the newly added
            // token and expiration date
            db.Users.update({
              password: hash,
              resetPasswordToken: '',
              resetPasswordExpires: ''
            })
            .then(function (updateRes) {
              //  console.log(userObj);
              // if (!userObj) return reject(err);

              resolve({
                user: userObj.dataValues
              });
            });
          });
        });


      });
    })
    .then((userObj) => {
      console.log(userObj);
      return new Promise((resolve, reject) => {
        const gmailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "bastards.of.greed@gmail.com",
            /////////////////add config file to pull in password
            pass: "aLetterandthenumber1"
          }
        });

        var mailOptions = {
          to: userObj.user.email,
          from: 'bastards.of.greed@gmail.com',
          subject: 'greedy bastards Password Reset',
          text: 'Hello,\n\n' +
            'This is a confirmation that the password for your account ' + userObj.user.email + ' has just been changed.\n'
        }

        gmailTransporter.sendMail(mailOptions, (err) => {
          if (err) {
            console.log(err);
            return reject(err);
          }

          resolve();
        });
      });
    })
    .then(() => {
      console.log('WORKED!!!!!!');
      res.status(200).send("yeah!!!!")
    })
    .catch((err) => {
      //check if the error is the one from the DB where the user was not found
      if (err == 404) {
        return res.sendStatus(404);
      }
      console.log('ahhh shit');
      return res.status(500).send(err);
    });
  }
}