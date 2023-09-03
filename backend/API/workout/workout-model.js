const db = require("../../data/db-config");

async function getAllRuns(user_id) {
  let result = await db("runs").where("user_id", user_id);
  return result;
}

async function getRunById(user_id, run_id) {
  let result = await db("runs")
    .where("user_id", user_id)
    .where("run_id", run_id);

  return result;
}

async function addRun(workout) {
  let [result] = await db("runs").insert(workout);

  return result;
}

async function deleteRun(user_id, run_id) {
  let result = await db("runs")
    .del()
    .where("user_id", user_id)
    .where("run_id", run_id);
  return result;
}

module.exports = { getAllRuns, getRunById, addRun, deleteRun };
