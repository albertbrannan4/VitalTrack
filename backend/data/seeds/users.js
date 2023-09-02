/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("users").truncate();
  await knex("users").insert([
    {
      email: "brandev22@gmail.com",
      username: "brandev22",
      password: "$2b$08$pliNVfrbbc4FQ1WeHZWb9eagZydpLGDNhtqr/6aCwnJ0NlVWXZtVO",
    },
    {
      email: "rui@gmail.com",
      username: "rui",
      password: "$2b$08$UFS7YDqZ5lcRcWSFLsGwjupffGm2eQUijVBzdtDpLrIMFh6VXDeFS",
    },
  ]);
};
