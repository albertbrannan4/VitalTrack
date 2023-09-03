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
    let allWorkouts = await Workout.getAllRuns(user_id);
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

    let result = await Workout.getRunById(user_id, req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json("error retrieving workout");
  }
});

router.post("/", restricted, async (req, res) => {
  const { miles, duration, notes } = req.body;
  try {
    const token = req.headers["authorization"];
    console.log(token);
    const userData = jwt.decode(token, JWT_SECRET);

    const user_id = await User.getIdByUsername(userData.username);

    let RunDetails = { user_id, miles, duration, notes: !notes ? "" : notes };

    let response = await Workout.addRun(RunDetails);

    res.json({ message: "Run Added", run_id: response });
  } catch (err) {
    res.status(500).json("error adding the workout");
  }
});

router.delete("/:id", restricted, async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userData = jwt.decode(token, JWT_SECRET);
    const { username } = userData;
    const user_id = await User.getIdByUsername(username);

    let result = await Workout.deleteRun(user_id, req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json("error retrieving workout");
  }
});

module.exports = router;
