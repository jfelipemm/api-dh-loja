module.exports = {
  client: 'mysql',
  connection: {
    host: 'db',
    port: 3306,
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
