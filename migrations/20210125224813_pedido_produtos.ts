import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('pedido_produtos', (table: Knex.TableBuilder) => {
    table.integer('quantidade').notNullable()
    table.increments('id_pedido_produto').primary()
    table.integer('produto_id').unsigned().notNullable().references('id_produto').inTable('produtos')
    table.integer('pedido_id').unsigned().notNullable().references('id_pedido').inTable('pedidos')
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pedido_produtos');
}