const router = require("express").Router();
const Workout = require("./workout-model");
const User = require("../auth/auth-model");
const { restricted } = require("../middleware/auth-middleware");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../secrets");

router.get("/", restricted, async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userData = jwt.decode(token, JWT_SECRET);
    const { username } = userData;
    const user_id = await User.getIdByUsername(username);
    let allWorkouts = await Workout.getAllWorkouts(user_id);
    res.json(allWorkouts);
  } catch (err) {
    res.status(500).json("error retrieving all workouts");
  }
});

router.get("/:id", restricted, async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userData = jwt.decode(token, JWT_SECRET);
    const { username } = userData;
    const user_id = await User.getIdByUsername(username);

    let result = await Workout.getWorkoutById(user_id, req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json("error retrieving workout");
  }
});

router.post("/", restricted, async (req, res) => {
  res.json("working on adding");
});

module.exports = router;
