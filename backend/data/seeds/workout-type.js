/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("workout_type").truncate();
  await knex("workout_type").insert([
    {
      workout_name: "run",
      workout_type_description:
        "The act of a person, animal, or thing that runs.",
    },
    {
      workout_name: "lift",
      workout_type_description:
        "to move or bring (something) upward from the ground or other support to a higher.",
    },
    {
      workout_name: "yoga",
      workout_type_description:
        "A Hindu spiritual and ascetic discipline, a part of which, including breath control.",
    },
  ]);
};
