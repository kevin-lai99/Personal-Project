export async function up(knex) {
  return knex.schema.createTable('technique', (table) => {
    table.string('character_id')
    table.string('technique_name')
    table.string('cost')
    table.string('action')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('technique')
}
