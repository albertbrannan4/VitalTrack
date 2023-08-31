/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// exports.up = async function (knex) {
//   await knex.schema.createTable("Workout", (workout) => {
//     workout.increments("workout_id");
//     workout
//       .integer("user_id")
//       .notNullable()
//       .references("user_id")
//       .inTable("users");
//     workout.int("workout_type_id");
//     workout.string("duration");
//     workout
//       .string("notes")

//   .createTable("workout_type", (type) => {
//     type.increments("workout_id");
//     type.string("workout_name");
//     type.string("workout_type_description");
//   });
//   });
// };
exports.up = function (knex) {
  return knex.schema
    .createTable("workout", (table) => {
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users");
      table.int("workout_type_id");
      table.string("duration");
      table.string("notes");
    })

    .createTable("workout_type", (type) => {
      type.increments("workout_id");
      type.string("workout_name");
      type.string("workout_type_description");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("workout_type")
    .dropTableIfExists("Workout");
};
