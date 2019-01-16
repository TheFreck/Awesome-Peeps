const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const ResetPasswordCtrl = require("../../controllers/ResetPasswordCtrl");

router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create)
  .put(usersController.update);

router
  .route("/:id")
  .post(usersController.login)
  // .get(usersController.grabInfoFromButton)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/forgotPassword/:email")
  .post(ResetPasswordCtrl.forgot);

router
  .route("/checkResetToken/:token")
  .post(ResetPasswordCtrl.checkToken);

router
  .route("/resetPassword/:token")
  .get(ResetPasswordCtrl.resetPassword)
  .post(ResetPasswordCtrl.resetPassword);

router.route("/items")
  .get(usersController.findUserAndItems)

module.exports = router;
