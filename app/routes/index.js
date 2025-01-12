const router = require("express").Router();
const homeRoutes = require("./home");
const registerRoutes = require("./auth/register");

router.use("/", homeRoutes);
router.use("/auth", registerRoutes);

module.exports = router;
