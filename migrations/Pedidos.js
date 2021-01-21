exports.up = function (knex) {
  return knex.schema.createTable('pedidos', table => {
    table.increments('id').primary()
    table.datetime('data').notNull()
    table.decimal('total').notNull()
    
    // AQUI VAI O ID APONTANDO PARA A TABELA DE CLIENTES
    // table.string('cliente_id').notNull()

    // AQUI VAI O ID APONTANDO PARA A TABELA DE FUNCIONARIOS
    //table.string('funcionario_id').notNull()
    
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('pedidos')
};