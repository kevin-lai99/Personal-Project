export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('stats').del()

  await knex('stats').insert([
    { character_id: 1, str: 0, dex: 8, spi: 9, int: -3, chi: 17 },
    { character_id: 2, str: 4, dex: 5, spi: -2, int: 7, chi: 8 },
    { character_id: 3, str: 7, dex: 7, spi: 0, int: 0, chi: 12 },
    { character_id: 4, str: 2, dex: 0, spi: 17, int: 0, chi: 18 },
  ])
}
