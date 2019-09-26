
exports.up = function(knex) {
  return knex.schema.createTable('game_events', t => {
      t.increments('id').primary();
      t.integer('match_id').unsigned().index().references('id').inTable('matches').notNullable();
      t.integer('player_id').unsigned().index().references('id').inTable('users');
      t.integer('event_type').index().notNullable();
      t.integer('team').index().notNullable();
      t.integer('period').index().notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('game_events')
};
