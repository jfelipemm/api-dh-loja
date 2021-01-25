import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('clientes', (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("endereco").notNullable();
    table.string("telefone").notNullable();
    table.string("email").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('clientes');
}