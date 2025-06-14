export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('item').del()

  await knex('item').insert([
    {
      item_id: 1,
      item_name: `Elixir of Health`,
      description: `Heal: 10HP Toxic: 10 Cost: 100 Silver`,
    },
    {
      item_id: 2,
      item_name: `Greater Elixir of Health`,
      description: `Heal: 20HP Toxic: 20 Cost: 200 Silver`,
    },
    {
      item_id: 3,
      item_name: `Superior Elixir of Health`,
      description: `Heal: 50HP Toxic: 30 Cost: 400 Silver`,
    },
    {
      item_id: 4,
      item_name: `Elixir of Chi`,
      description: `Regain: 1 Chi Toxic: 10 Cost: 100 Silver`,
    },
    {
      item_id: 5,
      item_name: `Greater Elixir of Chi`,
      description: `Regain: 3 Chi Toxic: 20 Cost: 200 Silver`,
    },
    {
      item_id: 6,
      item_name: `Superior Elixir of Chi`,
      description: `Regain: 5 Chi Toxic: 30 Cost: 400 Silver`,
    },
  ])
}
