module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    database: 'hackaton',
    user: 'user',
    password: 'password'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
