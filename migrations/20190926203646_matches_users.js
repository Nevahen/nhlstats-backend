
exports.up = function(knex) {
  return knex.schema.createTable('matches_users', t => {
      t.increments('id').primary();
      t.integer('match_id').unsigned().index().references('id').inTable('matches').notNull().onDelete('CASCADE');
      t.integer('player_id').unsigned().index().references('id').inTable('users').notNull();
      t.integer('team').index().notNull();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('matches_users')
};
