const router = require("express").Router();
const resetController = require("../../controllers/resetController");

function checkAuth(req, res, next) {
  console.log("route req.session: ", req.session);
  if (req.session.user != undefined) {
    console.log("there is a user: ", req.session);
    next()
  } else {
    console.log("route auth error");
    res.status(401).send("authentication error. Must be logged in")
  }
}

router
  .route("/forgot/:email")
  .post(resetController.forgot);

router
  .route("/checkResetToken/:token")
  .get(resetController.checkToken);

router
  .route("/resetPassword")
  .put(checkAuth, resetController.resetPassword);
    

module.exports = router;
