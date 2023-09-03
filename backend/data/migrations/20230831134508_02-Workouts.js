/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("runs", (table) => {
    table.increments("run_id");
    table
      .integer("user_id")
      .notNullable()
      .references("user_id")
      .inTable("users");
    table.float("miles").notNullable;
    table.integer("duration").notNullable;
    table.string("notes");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("runs");
};
