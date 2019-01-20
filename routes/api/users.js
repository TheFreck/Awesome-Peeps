const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const resetController = require("../../controllers/resetController");

router 
  .route("/friends/:id")
  .get(usersController.findFriendsAndItems)

router
  .route("/forgotPassword/:email")
  .post(resetController.forgot);

router
  .route("/checkResetToken/:token")
  .get(resetController.checkToken);
  
router 
  .route("/auth")
  .get(usersController.auth);

router 
  .route("logout")
  .get(usersController.logout);

router
  .route("/:id")
  .post(usersController.login)
  .get(usersController.findUserAndItems)
  .put(usersController.updateUser)
  .delete(usersController.remove);
  
router
  .route("/resetPassword")
  .put(resetController.resetPassword);

router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create)
  .put(usersController.update);

module.exports = router;
