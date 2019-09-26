
exports.up = function(knex) {
  return knex.schema.createTable('matches', t => {
      t.increments('id').primary();
      t.integer('homeTeam').unsigned().index().references('id').inTable('teams').notNull();;
      t.integer('awayTeam').unsigned().index().references('id').inTable('teams').notNull();;
      t.integer('winnerTeam').unsigned().index().notNull();;
      t.integer('scoreHome').unsigned().index().notNull();;
      t.integer('scoreAway').unsigned().index().notNull();;
      t.timestamp('date').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('matches')
};
