const router = require("express").Router();
const resetController = require("../../controllers/resetController");

router
  .route("/forgot/:email")
  .post(resetController.forgot);

router
  .route("/checkResetToken/:token")
  .get(resetController.checkToken);

router
  .route("/resetPassword")
  .put(resetController.resetPassword);
    

module.exports = router;
