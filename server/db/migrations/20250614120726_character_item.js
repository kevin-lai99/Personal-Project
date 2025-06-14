export async function up(knex) {
  return knex.schema.createTable('character_item', (table) => {
    table.string('character_id')
    table.string('item_id')
    table.string('amount')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('character_item')
}
