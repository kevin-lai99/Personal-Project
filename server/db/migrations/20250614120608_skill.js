export async function up(knex) {
  return knex.schema.createTable('skill', (table) => {
    table.string('character_id')
    table.string('athletics')
    table.string('intimidation')
    table.string('acrobatics')
    table.string('stealth')
    table.string('performance')
    table.string('taming')
    table.string('investigation')
    table.string('knowledge')
    table.string('medicine')
    table.string('crafting')
    table.string('perception')
    table.string('wilderness')
    table.string('insight')
    table.string('rhetoric')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('skill')
}
