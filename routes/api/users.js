const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const resetController = require("../../controllers/resetController");

function checkAuth(req, res, next) {
  if (req.session.user != undefined) {
    next()
  } else {
    res.status(401).send("authentication error. Must be logged in")
  }
}

router
  .route("/shopping/:id")
  .post(usersController.login)
  .get(usersController.findShoppingListItems)
  .put(usersController.updateUser)
  // .delete(usersController.remove);

router 
  .route("/friends/:id")
  .get(checkAuth, usersController.findFriendsAndItems)

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
  .route("/logout")
  .get(checkAuth, usersController.logout);

router
  .route("/:id")
  .post(usersController.login)
  .get(checkAuth, usersController.findUserAndItems)
  .put(checkAuth, usersController.updateUser)
  .delete(checkAuth, usersController.remove);
  
router
  .route("/resetPassword")
  .put(checkAuth, resetController.resetPassword);

router
  .route("/")
  .get(checkAuth, usersController.findAll)
  .post(checkAuth, usersController.create)
  .put(checkAuth, usersController.update);


module.exports = router;