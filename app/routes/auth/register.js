const router = require("express").Router();
router.get("/register", (req, res) => {
  res.render("home/auth/register.ejs");
});
router.post("/register", (req, res) => {
  res.json(req.body);
});
module.exports = router;
