
exports.up = function(knex) {
  return knex.schema.createTable('project', t => {
      t.increments('id').primary();
      t.string('name');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project')
};
