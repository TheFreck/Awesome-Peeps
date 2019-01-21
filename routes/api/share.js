const router = require("express").Router();
const shareController = require("../../controllers/shareController");

function checkAuth(req, res, next) {
  if (req.session.user != undefined) {
    next()
  } else {
    res.status(401).send("authentication error. Must be logged in")
  }
}

// Matches with "/api/share"
router
  .route("/")
  .get(shareController.findAll)
  .post(shareController.create)
  .put(shareController.update);

// Matches with "/api/share/:id"
router
  .route("/:id")
  .get(shareController.findAll)
  .put(shareController.updateUser)
//   .get(usersController.findUserAndItems)
//   .put(usersController.updateUser)
//   .delete(usersController.remove);

  // router.route("/items/")
  // .get(usersController.findUserAndItems)

module.exports = router;
