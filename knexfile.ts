module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3307,
    database: 'hackaton',
    user: 'user',
    password: 'password'
  },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'ts',
    directory: 'migrations'
  }
};
