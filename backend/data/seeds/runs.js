/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("runs").truncate();
  await knex("runs").insert([
    {
      user_id: 1,
      miles: 5,
      duration: 2400,
      notes: "8 min mile day",
    },
  ]);
};
