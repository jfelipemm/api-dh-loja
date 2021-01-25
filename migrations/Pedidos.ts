import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('pedidos', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.timestamp("data").notNullable()
    table.decimal('total').notNullable()
    
    // AQUI VAI O ID APONTANDO PARA A TABELA DE CLIENTES
    // table.string('cliente_id').notNullable()

    // AQUI VAI O ID APONTANDO PARA A TABELA DE FUNCIONARIOS
    //table.string('funcionario_id').notNullable()
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pedidos');
}