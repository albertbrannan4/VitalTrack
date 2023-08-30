const db = require("../../data/db-config");

async function getAll() {
  const result = await db("users");
  return result;
}

async function getByUserName(username) {
  const result = await db("users").where("username", username).first();
  return result;
}

async function addUser(user) {
  return db("users")
    .insert(user)
    .then(([result]) => {
      return db("users").where("user_id", result).first();
    });
}

module.exports = {
  addUser,
  getAll,
  getByUserName,
};
