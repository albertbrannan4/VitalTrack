const db = require("../../data/db-config");

async function getAllWorkouts(user_id) {
  let result = await db("runs").where("user_id", user_id);
  return result;
}

async function getWorkoutById(user_id, workout_id) {
  let result = await db("runs")
    .where("user_id", user_id)
    .where("run_id", workout_id);

  return result;
}

async function addWorkout(workout) {
  let result = await db("runs").insert(workout);
}

module.exports = { getAllWorkouts, getWorkoutById };
