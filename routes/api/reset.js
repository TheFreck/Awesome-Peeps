const router = require("express").Router();
const resetController = require("../../controllers/resetController");

// Matches with "/api/books"
router
  .route("/forgot/:email")
  .post(resetController.forgot);

router
  .route("/:token")
  .get(resetController.checkToken);

router
  .route("/")
  .put(resetController.resetPassword);
    

module.exports = router;
