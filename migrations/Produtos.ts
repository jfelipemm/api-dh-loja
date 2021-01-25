import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('produtos', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.string('codigo').notNullable()
    table.string('nome').notNullable()
    table.string('descricao').notNullable()
    table.decimal('preco').notNullable()
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('produtos');
}