export async function up(knex) {
  return knex.schema.createTable('stats', (table) => {
    table.integer('character_id')
    table.string('str')
    table.string('dex')
    table.string('spi')
    table.string('int')
    table.string('chi')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('stats')
}
