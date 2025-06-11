export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('technique').del()

  await knex('technique').insert([
    {
      character_id: 1,
      technique_name: `Lightning Rush`,
      cost: 1,
      action: 'movement',
      description: `Move up to your movement speed. You can pass through creatures. All creatures in the line
      have to make a Dex check against your TL. If they fail, they take Lightning damage equal to
      your Spirit. Add your Dex to your TL.`,
    },
    {
      character_id: 1,
      technique_name: `Lighting Crash`,
      cost: 3,
      action: 'full',
      description: `Add your Dex to your TL. All creatures within 10ft. of you have to make a Dex check against
      your TL. If they fail, they take Lightning damage equal to your Spirit.`,
    },
    {
      character_id: 1,
      technique_name: `Crystalline Shell`,
      cost: 1,
      action: 'free',
      description: `You can use this Technique at any time in a round, even when it’s not your turn. Gain Barrier
      equal to your Spi until the start of your next turn. Creatures that attack you with a melee attack
      while this Technique is active have to make a Str check against your TL. If they fail, they are Chilled.`,
    },
    {
      character_id: 1,
      technique_name: `Lighting Bolt`,
      cost: 1,
      action: 'full',
      description: `A creature within 50ft. and within line of sight has to make a Dex check against your TL. If they
      fail, they take Lightning damage equal to your Spirit.
      If the target is in melee range, add your Dex to your TL.`,
    },
    {
      character_id: 1,
      technique_name: `Blossoming Thunder`,
      cost: 3,
      action: 'free',
      description: `You can use this Technique at any time. Add your Spi to your Def until the start of your next
      turn. All adjacent creatures have to make a Dex check against your TL. Add your Dex to your
      TL. If they fail, they are Knocked Back 5ft. This Disengages you from Challenges and prevents melee attacks from hitting you.`,
    },
    {
      character_id: 1,
      technique_name: `Static Charge`,
      cost: 1,
      action: 'free',
      description: `This Technique can be used at any time in a round and can be used multiple times in a round.`,
    },
    {
      character_id: 1,
      technique_name: `Living Lighting`,
      cost: 5,
      action: 'quick',
      description: `Sheathe your entire body with Lightning. Basic Techniques are considered to be Free Actions
      while in this state. You cannot be Challenged and your movement speed increases by 10ft and
      your Dex increases by 3. Creatures who have come in contact with you during your turn take
      extra damage equal to your (Spirit-3). You have an Advantage against Dex Checks.
      These effects last until the start of your next turn and can be refreshed as a Free Action in the
      next turn and at a cost of 3 Chi. Gain a free Lightning orb at the start of your next turn.`,
    },
    {
      character_id: 1,
      technique_name: `Cold Snap`,
      cost: 1,
      action: 'full',
      description: `A creature within 80ft. has to make a Str check against your TL. If they fail, they take ice
      damage equal to your (Spirit-2) to a minimum of 1 and they are Chilled.
      Chilled: Creatures that are Chilled have their Movement Speed reduced by 10ft. At the end of
      their turn, they make a Str check against the TL of the Technique that applied Chilled. If they
      pass, the Chilled status is reduced by one level. If they are already Chilled, they becomeFrostbitten. If they were Frostbitten, they are now Frozen.`,
    },
    {
      character_id: 2,
      technique_name: `Expose Vulnerability`,
      cost: 1,
      action: 'quick',
      description: `As you hit an enemy with your next attack, all attacks against that enemy has a +5 until the start of your next turn in the round. `,
    },
    {
      character_id: 2,
      technique_name: `Stronghold`,
      cost: 3,
      action: 'free',
      description: `This Technique can be used at any time. Grant (1+Int) Barrier to all allies (including you) within 50 ft.`,
    },
    {
      character_id: 2,
      technique_name: `Calculated Attack`,
      cost: 1,
      action: 'Quick',
      description: `Add 3 + Int to your next attack.`,
    },
    {
      character_id: 2,
      technique_name: `Press the Attack`,
      cost: 1,
      action: 'full',
      description: `Make an attack against an enemy. If it hits, all attacks against the enemy deal an extra (1+Int) 
      True Damage until the start of your next turn in the next round. `,
    },
    {
      character_id: 2,
      technique_name: `Marching Orders`,
      cost: 3,
      action: 'quick',
      description: `All allies within 50ft. Increase their movement speed by 10ft until the start of your next turn.`,
    },
    {
      character_id: 2,
      technique_name: `Warden’s Warning`,
      cost: 1,
      action: 'free',
      description: `You can use this Technique when it’s not your turn. All allies within 30ft. Gains a Warden’s Warning. 
      When they need to make a check against an enemy’s TL, 
      they can consume the Warning and gain an Advantage and a bonus equal to your Int when they make a check. `,
    },
    {
      character_id: 2,
      technique_name: `Commander’s Decree`,
      cost: 5,
      action: 'quick',
      description: `All allies (not including you) within 100 ft. gain a Full Action and can use all their Techniques. 
      Using this Technique again within an hour (or the same battle) increases the Chi cost of this Technique by 3 each time.`,
    },
    {
      character_id: 2,
      technique_name: `Encouraging Attack`,
      cost: 1,
      action: 'free',
      description: `Make an attack against an enemy. If you hit, all allies (including yourself) within 50ft. Of you gain 2 Chi. `,
    },
    {
      character_id: 3,
      technique_name: `Cleave`,
      cost: 1,
      action: 'quick',
      description: `Can be used with 3 Rage, Your next melee attack targets a second adjacent creature to you. 
      The secondary target takes half damage if the attack hits. (Use the same attack value from the first target)`,
    },
    {
      character_id: 3,
      technique_name: `Revenge`,
      cost: 3,
      action: 'free',
      description: `Can be used with 6 Rage, Make a melee attack with Advantage immediately after a target has attacked you. 
      You can only use this Technique once per round.`,
    },
    {
      character_id: 3,
      technique_name: `Grit`,
      cost: 1,
      action: 'free',
      description: `Gain 2 Damage Reduction to all types of Damage (Except True) until the start of your turn in the next round. 
      You can use this Technique at any time.`,
    },
    {
      character_id: 3,
      technique_name: `Reckless Swing`,
      cost: 1,
      action: 'quick',
      description: `Can be used with 3 Rage, Your next melee attack has an Advantage. The next attack you receive will be at an Advantage. `,
    },
    {
      character_id: 3,
      technique_name: `Ferocious Roar `,
      cost: 3,
      action: 'quick',
      description: `Can be used with 6 Rage, All enemies within 80ft. Have to make an Int check against your TL (10+Str). If they fail, 
      they are Challenged by you until the end of their next turn and have to either attack you or move towards you if you are out of range.`,
    },
    {
      character_id: 3,
      technique_name: `Bloody Blow`,
      cost: 0,
      action: 'quick',
      description: `Your next melee attack this round deals +3 Damage. `,
    },
    {
      character_id: 3,
      technique_name: `Immortal Fighting God`,
      cost: 5,
      action: 'free',
      description: `Can be used with 10 Rage, Your HP cannot drop below 1. All your melee attacks target all enemies adjacent to you. 
      These bonuses apply until the start of your turn in the next round. This Technique can be used at any time in a round. 
      If you have used this Technique in your previous turn and you’re using it again, this Technique only costs a 3 Chi or 9 Rage to use.`,
    },
    {
      character_id: 3,
      technique_name: `Ground Slam`,
      cost: 1,
      action: 'full',
      description: `Can be used with 3 Rage, Slam the ground, causing all creatures adjacent to you to make a Strength Check against your TL. 
      If they fail, they take damage equal to half your Str and are Knocked Down.`,
    },
    {
      character_id: 3,
      technique_name: `Flameborn`,
      cost: 3,
      action: 'free',
      description: `Add half your level as Flame Damage to the next attack or Technique you use. 
      Until the end of your next turn, you Absorb all Flame damage done to you.
      Absorb: You do not take damage from this source of damage. 
      Before your turn ends, you can choose to heal what you have Absorbed or add that damage to your next attack or Technique.`,
    },
    {
      character_id: 3,
      technique_name: `Phoenix Resurgence`,
      cost: 3,
      action: 'Quick',
      description: `You and creatures adjacent to you take True Damage equal to your level at the start of your turn after this 
      Technique is activated. The first time your health would drop to 0 in a battle, 
      revive to full health and deal True damage equal to twice your level to all creatures within 15 feet of you. 
      This Technique can only be used once per Battle.`,
    },

    {
      character_id: 4,
      technique_name: `Restoration`,
      cost: 1,
      action: 'movement',
      description: `Heal a creature within 30 ft. of you or your Guardian Spirit for a value equal to your Spi.`,
    },
    {
      character_id: 4,
      technique_name: `Intervention`,
      cost: 3,
      action: 'full',
      description: `Enemies within 30ft. Of either you or your Guardian Spirit have to make a Spi save against your TL. 
      If they fail, they are Blinded until the end of your turn. 
      Allies within the same area are healed to a value equal to your Spi.
      Blinded: Creatures are unable to see and they have Disadvantage on their attacks`,
    },
    {
      character_id: 4,
      technique_name: `Sacred Ray`,
      cost: 1,
      action: 'full',
      description: `A creature within 30ft. Of you or your GS has to make a Dex save against your TL. 
      If they fail, they take Sacred Damage equal to your Spi. `,
    },
    {
      character_id: 4,
      technique_name: `Mind Venom`,
      cost: 3,
      action: 'full',
      description: `All enemies within 30ft. of you or your Guardian Spirit has to make a Spi Check against your Spi TL. 
      If they fail the check, they are Spiritually Poisoned (Creatures who are Spiritually Poisoned take Profane damage equal to half your Spi 
      at the start of their turn. At the end of their turn, they have to make a Spi Check against your TL again. If they fail, 
      they continue to be Spiritually Poisoned.)`,
    },
    {
      character_id: 4,
      technique_name: `Heaven's Bounty`,
      cost: 1,
      action: 'movement',
      description: `Allies within 30ft. Of either you or your GS gain 1 Chi. This applies to you too. `,
    },
    {
      character_id: 4,
      technique_name: `Furious Earth`,
      cost: 3,
      action: 'full',
      description: `Enemies within 30ft. Of either you or your GS have to make a Dex check against your TL. 
      If they fail, they are Knocked Down and take damage equal to half of your Spi.`,
    },
    {
      character_id: 4,
      technique_name: `Earthen Shield`,
      cost: 1,
      action: 'movement',
      description: `All allies within 30ft. of either you or your Guardian Spirit gain a Barrier equal to your (Spi-3) to a minimum of 1.`,
    },
    {
      character_id: 4,
      technique_name: `Glorious Restoration`,
      cost: 5,
      action: 'full',
      description: `An ally (including yourself) within 30ft. of you or your GS regain all of their HP and Chi and all 
      negative conditions are removed. It does not work on dead allies. 
      Each subsequent use of this Technique before a short rest increases the Chi cost of this Technique by 3.`,
    },
    {
      character_id: 4,
      technique_name: `Weaken`,
      cost: 1,
      action: 'movement',
      description: `A creature within 30ft. Of either you or your GS has to make a Spi Check against your TL. 
      If they fail, they are weakened to a value equal to your Spi until the start of your next turn. 
      Weakened: Damage is reduced by a value to a minimum of 1.`,
    },
  ])
}
