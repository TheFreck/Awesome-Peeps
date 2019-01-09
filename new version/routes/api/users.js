const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .post(usersController.login)
  .get(usersController.grabInfoFromButton)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
