/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("workout").truncate();
  await knex("workout").insert([
    { user_id: 1, workout_type_id: 2, duration: "60", notes: "easy day" },
    { user_id: 1, workout_type_id: 1, duration: "45", notes: "hard day" },
    { user_id: 2, workout_type_id: 3, duration: "45", notes: "okay day" },
  ]);
};
