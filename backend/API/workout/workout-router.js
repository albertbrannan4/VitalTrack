const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("returning all workouts");
});

router.get("/:id", (req, res) => {
  res.json("returning one workout");
});

module.exports = router;
