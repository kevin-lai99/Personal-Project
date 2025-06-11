export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('conditions').del()

  await knex('conditions').insert([
    {
      character_id: 1,
      hp: 24,
      barrier: 0,
      defence: 18,
      armour: 3,
      movement: 30,
      current_chi: 17,
      attack: 8,
      damage: 2,
      technique_level: 19,
    },
    {
      character_id: 2,
      hp: 52,
      barrier: 0,
      defence: 24,
      armour: 6,
      movement: 30,
      current_chi: 8,
      attack: 9,
      damage: 10,
      technique_level: 17,
    },
    {
      character_id: 3,
      hp: 55,
      barrier: 0,
      defence: 18,
      armour: 5,
      movement: 30,
      current_chi: 12,
      attack: 7,
      damage: 20,
      technique_level: 16,
    },
    {
      character_id: 4,
      hp: 26,
      barrier: 0,
      defence: 9,
      armour: -3,
      movement: 30,
      current_chi: 18,
      attack: 0,
      damage: 0,
      technique_level: 27,
    },
  ])
}
