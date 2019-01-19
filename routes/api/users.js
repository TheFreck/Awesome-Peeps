const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const resetContoroller = require("../../controllers/resetController");

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
  .route("/shopping/:id")
  .post(usersController.login)
  .get(usersController.findShoppingListItems)
  .put(usersController.updateUser)
  .delete(usersController.remove);

router 
  .route("/friends/:id")
  .get(usersController.findFriendsAndItems)

router
  .route("/forgotPassword/:email")
  .post(resetContoroller.forgot);

router
  .route("/checkResetToken/:token")
  .get(resetContoroller.checkToken);

router
  .route("/resetPassword")
  .put(resetContoroller.resetPassword);

module.exports = router;
