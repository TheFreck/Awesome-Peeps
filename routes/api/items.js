const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

function checkAuth(req, res, next) {
  if (req.session.user != undefined) {
    next()
  } else {
    res.status(401).send("authentication error. Must be logged in")
  }
}

// Matches with "/api/items"
router.route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
