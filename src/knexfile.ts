module.exports = {
  client: 'mysql',
  connection: {
    database: 'hackaton',
    user: 'user',
    password: 'password'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
