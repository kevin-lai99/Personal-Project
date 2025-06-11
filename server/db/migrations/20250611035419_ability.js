export async function up(knex) {
  return knex.schema.createTable('ability', (table) => {
    table.string('character_id')
    table.string('ability_name')
    table.string('cost')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ability')
}
