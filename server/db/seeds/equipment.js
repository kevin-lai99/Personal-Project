export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('equipment').del()

  await knex('equipment').insert([
    {
      equipment_id: 1,
      equipment_name: `Daggers`,
      description: `(+1 Dmg) One-handed, Thrown (20ft.)`,
    },
    {
      equipment_id: 2,
      equipment_name: `Shuriken`,
      description: `(+1 Dmg) Ranged only. One-handed, Thrown (30ft.)`,
    },
    {
      equipment_id: 3,
      equipment_name: `Sling`,
      description: `(+1 Dmg) One-handed, Range (50 ft.)`,
    },
    {
      equipment_id: 4,
      equipment_name: `Spear`,
      description: `(+2 Dmg) Two-handed, Thrown (20ft.), Reach (+5ft.)`,
    },
    {
      equipment_id: 5,
      equipment_name: `Sword`,
      description: `(+2 Dmg) One-handed`,
    },
    {
      equipment_id: 6,
      equipment_name: `Shortbow`,
      description: `(+2 Dmg) Two-handed, Range (80ft.)`,
    },
    {
      equipment_id: 7,
      equipment_name: `Longbow`,
      description: `(+4 Dmg) Two-handed, Range (150ft.)`,
    },
    {
      equipment_id: 8,
      equipment_name: `Heavy Axe`,
      description: `(+4 Dmg) Two-handed`,
    },
    {
      equipment_id: 9,
      equipment_name: `Polearm`,
      description: `(+4 Dmg) Two-handed, Reach (+5ft)`,
    },
    {
      equipment_id: 10,
      equipment_name: `Light Shield`,
      description: `(+1 Def)`,
    },
    {
      equipment_id: 11,
      equipment_name: `Medium Shield`,
      description: `(+2 Def)`,
    },
    {
      equipment_id: 12,
      equipment_name: `Heavy Shield`,
      description: `(+4 Def)`,
    },
    {
      equipment_id: 13,
      equipment_name: `Light Armour`,
      description: `(+1 Armour)`,
    },
    {
      equipment_id: 14,
      equipment_name: `Medium Armour`,
      description: `(+2 Armour)`,
    },
    {
      equipment_id: 15,
      equipment_name: `Heavy Armour`,
      description: `(+4 Armour)`,
    },
  ])
}
