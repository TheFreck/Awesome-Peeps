const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
//NEW
const shareRoute = require("./share");
const resetRoute = require("./reset");

// Routes
router.use("/users", userRoutes);
router.use("/items", itemRoutes);

//NEW
router.use("/share", shareRoute);
router.use("/reset", resetRoute);

module.exports = router;
