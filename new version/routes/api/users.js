const router = require("express").Router();
const usersController = require("../../controllers/usersController");

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
  .put(usersController.update)
  .delete(usersController.remove);

  // router.route("/items/")
  // .get(usersController.findUserAndItems)

module.exports = router;
