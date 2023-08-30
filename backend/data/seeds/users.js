/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("users").truncate();
  await knex("users").insert([
    { email: "brandev22@gmail.com", username: "brandev22", password: "admin" },
  ]);
};
