exports.up = function (knex) {
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary()
    table.string('codigo').notNull()
    table.string('nome').notNull()
    table.string('descricao').notNull()
    table.decimal('preco').notNull()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('produtos')
};