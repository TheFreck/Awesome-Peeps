const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

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

// Matches with "/api/items"
router.route("/")
  .get(checkAuth, itemsController.findAll)
  .post(checkAuth, itemsController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(checkAuth, itemsController.findById)
  .put(checkAuth, itemsController.update)
  .delete(checkAuth, itemsController.remove);

  router.route("/shoppingList")
    .post(itemsController.addTolist);

module.exports = router;
