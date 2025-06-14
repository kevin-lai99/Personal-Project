export async function up(knex) {
  return knex.schema.createTable('item', (table) => {
    table.string('item_id')
    table.string('item_name')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('item')
}
