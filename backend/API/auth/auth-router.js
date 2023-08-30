const router = require("express").Router();

router.get("/register", (req, res) => {
  res.json("create user route is live");
});

module.exports = router;
