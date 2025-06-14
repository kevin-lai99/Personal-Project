export async function up(knex) {
  return knex.schema.createTable('character_equipment', (table) => {
    table.string('character_id')
    table.string('equipment_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('character_equipment')
}
