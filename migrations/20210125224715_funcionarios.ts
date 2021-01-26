import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('funcionarios', (table: Knex.TableBuilder) => {
    table.increments("id_funcionario").primary()
    table.string("nome").notNullable()
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('funcionarios');
}