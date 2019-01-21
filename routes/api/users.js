const router = require("express").Router();
const usersController = require("../../controllers/usersController");
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
  .route("/shopping/:id")
  .post(checkAuth, usersController.login)
  .get(checkAuth, usersController.findShoppingListItems)
  .put(checkAuth, usersController.updateUser)
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
  .get(usersController.logout);

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
  .post(checkAuth, usersController.create);


module.exports = router;