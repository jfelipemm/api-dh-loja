exports.up = function (knex) {
  return knex.schema.createTable('pedido_produtos', table => {
    table.increments('id').primary()
    
    // AQUI VAI O ID APONTANDO PARA A TABELA DE PRODUTOS
    // table.string('produto_id').notNull()

    // AQUI VAI O ID APONTANDO PARA A TABELA DE PEDIDOS
    // table.string('pedido_id').notNull()

    table.integer('quantidade').notNull()

  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('pedido_produtos')
};