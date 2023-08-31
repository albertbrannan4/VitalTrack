const router = require("express").Router();
const Workout = require("./workout-model");

router.get("/", async (req, res) => {
  try {
    let allWorkouts = await Workout.getAllWorkouts();
    res.json(allWorkouts);
  } catch (err) {
    res.status(500).json("error retrieving all workouts");
  }
});

router.get("/:id", async (req, res) => {
  try {
    let result = await Workout.getWorkoutById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json("error retrieving workout");
  }
});

module.exports = router;
