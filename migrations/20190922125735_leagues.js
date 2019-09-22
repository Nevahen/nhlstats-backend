
exports.up = function(knex) {
  return knex.schema.createTable('leagues', t => {
      t.increments('id').primary();
      t.string('name', 191).unique();
      
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('leagues')
};
