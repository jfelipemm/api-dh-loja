import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('pedidos', (table: Knex.TableBuilder) => {
    table.increments('id_pedido').primary()
    table.dateTime('data').notNullable()
    table.decimal('total').notNullable()
    table.integer('cliente_id').unsigned().notNullable().references('id_cliente').inTable('clientes')
    table.integer('funcionario_id').unsigned().notNullable().references('id_funcionario').inTable('funcionarios')
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pedidos');
}