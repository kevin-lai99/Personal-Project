export async function up(knex) {
  return knex.schema.createTable('equipment', (table) => {
    table.string('equipment_id')
    table.string('equipment_name')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('equipment')
}
