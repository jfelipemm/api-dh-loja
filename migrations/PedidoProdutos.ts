import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('pedido_produtos', (table: Knex.TableBuilder) => {
    table.increments('id').primary()

    // AQUI VAI O ID APONTANDO PARA A TABELA DE PRODUTOS
    // table.string('produto_id').notNullable()

    // AQUI VAI O ID APONTANDO PARA A TABELA DE PEDIDOS
    // table.string('pedido_id').notNullable()

    table.integer('quantidade').notNullable()
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pedido_produtos');
}