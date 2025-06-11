export async function up(knex) {
  return knex.schema.createTable('conditions', (table) => {
    table.string('character_id')
    table.string('hp')
    table.string('barrier')
    table.string('defence')
    table.string('armour')
    table.string('movement')
    table.string('current_chi')
    table.string('attack')
    table.string('damage')
    table.string('technique_level')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('conditions')
}
