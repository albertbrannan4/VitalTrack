const db = require("../../data/db-config");

async function getAllWorkouts() {
  let result = await db("workout");
  return result;
}

async function getWorkoutById(workout_id) {
  let result = await db("workout").where("workout_id", workout_id);

  return result;
}

module.exports = { getAllWorkouts, getWorkoutById };
