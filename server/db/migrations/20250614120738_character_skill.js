export async function up(knex) {
  return knex.schema.createTable('character_skill', (table) => {
    table.string('character_id')
    table.string('skill_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('character_skill')
}
