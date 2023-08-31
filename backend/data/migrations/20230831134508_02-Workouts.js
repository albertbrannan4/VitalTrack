/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable("workout", (table) => {
      table.increments("workout_id");
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users");
      table
        .integer("workout_type_id")
        .notNullable()
        .references("workout_type_id")
        .inTable("workout_type");
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
