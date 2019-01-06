const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//sessions
app.use(
  session({
  secret: "emdki32;q;lf9xbml;LK", //pick a random string to make the hash that is generated secure
  resave: false, //required
  saveUninitialized: false //required
  })
)
app.use( (req, res, next) => {
  // console.log("\n*****\n\nreq.session: ", req.session.id + "\n*****\n");
  return next();
})
app.post('/api/user', (req, res) => {
  console.log('server user signup');
  req.session.username = req.body.username;
  res.end()
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/greedyBastages");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
