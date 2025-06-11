export async function up(knex) {
  return knex.schema.createTable('character', (table) => {
    table.increments('character_id')
    table.string('character_name')
    table.string('description')
    table.string('class')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('character')
}
