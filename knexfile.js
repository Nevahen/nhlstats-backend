// Update with your config settings.
require('dotenv').config({ path: './.env' });
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'dev',
      user: 'dev',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
