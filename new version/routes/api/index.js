const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
//NEW
const shareRoute = require("./share");

// Routes
router.use("/users", userRoutes);
router.use("/items", itemRoutes);

//NEW
router.use("/share", shareRoute);

module.exports = router;
