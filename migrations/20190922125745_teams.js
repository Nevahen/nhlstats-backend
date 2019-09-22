
exports.up = function(knex) {
  return knex.schema.createTable('teams', t => {
      t.increments('id').primary();
      t.string('name', 191).unique();
      t.string('shortname', 191).unique();
      t.integer('league_id').unsigned().index().references('id').inTable('leagues');      
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('teams')
};
