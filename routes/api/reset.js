const router = require("express").Router();
const resetRoute = require("../../controllers/ResetPasswordCtrl");

// Matches with "/api/books"
router
  .route("/forgot/:email")
  .post(resetRoute.forgot);

router
  .route("/:token")
  .get(resetRoute.checkToken);

router
  .route("/")
  .put(resetRoute.resetPassword);
    

module.exports = router;
