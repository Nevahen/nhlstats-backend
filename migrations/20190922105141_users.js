
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
      t.increments('id').primary();
      t.string('username', 191).unique();
      t.string('password', 191).notNull();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
