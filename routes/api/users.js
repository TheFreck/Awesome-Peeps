const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const ResetPasswordCtrl = require("../../controllers/ResetPasswordCtrl");

// Matches with "/api/books"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create)
  .put(usersController.update);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .post(usersController.login)
  .get(usersController.findUserAndItems)
  .put(usersController.updateUser)
  .delete(usersController.remove);

router
  .route("/forgotPassword/:email")
  .post(ResetPasswordCtrl.forgot);

router
  .route("/checkResetToken/:token")
  .get(ResetPasswordCtrl.checkToken);

router
  .route("/resetPassword")
  .put(ResetPasswordCtrl.resetPassword);

  // router.route("/items/")
  // .get(usersController.findUserAndItems)

module.exports = router;
