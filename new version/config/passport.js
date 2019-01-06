const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

module.exports = passport => {
  // =========================================================================
  // passport session setup
  // =========================================================================

  // tags the user as logged in or logged out

  passport.serializeUser((user, done) => {
    console.log("passport serialize user: ", user.uuid);
    done(null, user.uuid);
  });

  passport.deserializeUser((uuid, done) => {
    db.User.findById(uuid).then(user => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  // =========================================================================
  // LOCAL SIGNUP
  // =========================================================================

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "account_key",
        passReqToCallback: true
      },
      (req, email, account_key, done) => {
        process.nextTick(() => {
          // does the user already exist?

          db.User
            .findOne({
              profile: {
                email: email
                }
              }, (err, user) => {
                if(err) {
                  return done(err);
                }
                if(!user) {
                  return done(null, false, { message: "Incorrect username" });
                }
                if(!user.checkPassword(account_key)) {
                  return done(null, false, { message: "Incorrect password" });
                }
                return done(null, user);
              }
            )

          // is that email already taken?
          if (user) {
            console.log("signupMessage", "That email is already taken.");
            return done(
              null,
              false,
              req.flash("signupMessage", "That email is already taken.")
            );
          } else {
            // if not make a new user
            db.User
              .create({
                name: req.body.name,
                email: req.body.email,
                account_key: db.User.generateHash(account_key)
              })
              .then(dbUser => {
                return done(null, dbUser);
              })
              .catch(function(err) {
                // handle error;
                console.log(err);
              });
            }
        });
      }
    )
  )
  

  // =========================================================================
  // LOCAL LOGIN
  // =========================================================================

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "account_key",
        passReqToCallback: true
      },
      (req, email, account_key, done) => {
        // does this user already exist?
        console.log("passport login hit");
        db.User
          .findOne({
            profile: {
              email: email
              }
          })
          .then((user, err) => {
            if (err) throw err;

            if (!user) {
              console.log("no user found");
              return done(
                null,
                false,
                req.flash("loginMessage", "No user found.")
              );
            }
            console.log("user.validPassword: ", user.validPassword(req.body.account_key));
            // if the user exists but fails password
            if (user && !user.validPassword(req.body.account_key)) {
              return done(
                null,
                false,
                req.flash("loginMessage", "Oops! Wrong password.")
              );
            }

            // all is well, return successful user

            return done(null, user);

            // all is well, return successful user
          });
      }
    )
  );
};
