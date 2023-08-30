const db = require("../../data/db-config");

async function addUser(user) {
  return db("users")
    .insert(user)
    .then(([result]) => {
      return db("users").where("user_id", result).first();
    });
}

module.exports = {
  addUser,
};
