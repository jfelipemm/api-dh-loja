
exports.up = function (knex) {
  return knex.schema.createTable('funcionarios', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('funcionarios')
};
