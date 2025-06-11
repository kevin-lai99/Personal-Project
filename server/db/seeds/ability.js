export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ability').del()

  await knex('ability').insert([
    {
      character_id: 1,
      ability_name: `Minor Element Control`,
      cost: 0,
      description: `Within an area of 10ft. you’re able to manifest small sparks, cold spots and minor flames which are harmless for the most part. `,
    },
    {
      character_id: 1,
      ability_name: `Transcendent Boty`,
      cost: 0,
      description: `Your body is now attuned to the elements and draws sustenance from them. You do not require food. You only require 2 hours of meditation to rest instead of sleep.`,
    },
    {
      character_id: 1,
      ability_name: `Combat training A`,
      cost: 0,
      description: `At the start of a battle, gain a Chi Orb. If you have a Specialty, you can gain the Chi Orb of that type. +1 Chi`,
    },
    {
      character_id: 1,
      ability_name: `Lightning Orb A`,
      cost: 0,
      description: `Before you use a Dragon Technique, roll a D20+Spi to determine if you can generate a Chi Orb. 
      If the result is 15 or higher, 1 Chi Orb is generated. 
      If you roll a 20, 3 Chi Orbs are generated.
      The maximum number of orbs that can be sustained by a Dragon is 3. If more Orbs are generated, you choose what Orbs to keep. 
      When you use a Technique, you can choose to consume your Orbs. For each Orb that is used, your Technique will cost 1 less Chi.`,
    },
    {
      character_id: 1,
      ability_name: `Shadowflesh Curse`,
      cost: 0,
      description: `Take 5 True Damage. Increase your Spi by 5 until the end of your turn, resistent to all dmg other than true and sacred`,
    },
    {
      character_id: 2,
      ability_name: `Cloak of Resistance`,
      cost: 0,
      description: `Can choose to add +2 to a TL check you have to make against an enemy spell. This can be used only once per turn`,
    },
    {
      character_id: 2,
      ability_name: `Guardian A`,
      cost: 0,
      description: `When an ally adjacent to you is the target of a single-target Attack or Technique, 
      you can choose to become the target instead. This can only be used once before it is your turn again. `,
    },
    {
      character_id: 2,
      ability_name: `Tactician A`,
      cost: 0,
      description: `All allies (not including yourself) within 50ft. gain +2 to Attack and +2 Defence.`,
    },
    {
      character_id: 2,
      ability_name: `Formless Blade +2`,
      cost: 0,
      description: `(Default - +6 dmg) A sword that can change its damage type to any other type (+1 sacred dmg)`,
    },
    {
      character_id: 3,
      ability_name: `Fearsome Reputation`,
      cost: 0,
      description: `Those who follow the Path of the Bull are renowned for being people of great strength and brutish power.`,
    },
    {
      character_id: 3,
      ability_name: `Rage A`,
      cost: 0,
      description: `Whenever you suffer damage, gain 1 Rage. 
      Your total Rage cannot exceed 10. 
      1 Rage can be used to move 5ft. as a Free Action.
      1 Rage can be spent to increase the Damage of your next attack or Technique by 2.
      Some Techniques allow you to pay for the Chi cost with Rage. (The cost cannot be split between Chi and Rage.)
      `,
    },
    {
      character_id: 3,
      ability_name: `Bloodhunger +2`,
      cost: 3,
      description: `After doing damage, you can spend 3 Chi to gain health up to half the damage done. (+6 Phy dmg)`,
    },
    {
      character_id: 3,
      ability_name: `Advanced Bull Proficiency`,
      cost: 0,
      description: `You can wield a Heavy 2-Handed weapon in one hand. 
      If you continue to carry a 2-Handed weapon with 2 Hands, +2 Damage to it and gain 5 ft of Reach.`,
    },
    {
      character_id: 3,
      ability_name: `Legendary Warrior`,
      cost: 3,
      description: `Mercenaries and bandits have heard your feats and heroics. Some may gather a band of
      warriors who are willing to fight under your command and assist you. The quality of their warriors may be questionable however.
      Famed warriors may also seek you out for a duel to test your skill.`,
    },
    {
      character_id: 3,
      ability_name: `Berserker A`,
      cost: 0,
      description: `For every 5 HP that you are missing, gain 1 Rage at the start of your turn.`,
    },
    {
      character_id: 4,
      ability_name: `Final Rites`,
      cost: 0,
      description: `Gain +2 to Medicine skill checks. 
      You have knowledge of funeral rites and are able to perform funerals for the deceased, appeasing any restless spirits.`,
    },
    {
      character_id: 4,
      ability_name: `Guardian Spirit Buffs / Debuffs`,
      cost: 0,
      description: `Immunity to Poison, Takes 1/3/5 True Damage every time a Basic/Advanced/Ultimate Technique is used.`,
    },
    {
      character_id: 4,
      ability_name: `Spirit Guardian A`,
      cost: 0,
      description: `You summon your Spirit Guardian which can come in any form or shape but is not bigger than a person. 
      They can be in a shape of a person, animal or object. Your Rabbit Techniques can originate from your Spirit Guardian. 
      During your turn, your Spirit Guardian is able to move up to its movement speed along with you. 
      Your Spirit Guardian must stay within 50ft. of your character.`,
    },
    {
      character_id: 4,
      ability_name: `Way of the Boundless Heaven A`,
      cost: 0,
      description: `Whenever you use a Divine Heaven Technique, all allies within 30ft. Of your Guardian Spirit gain 3 HP.`,
    },
    {
      character_id: 4,
      ability_name: `Spirit Vision and Language`,
      cost: 0,
      description: `You are able to see spirits and converse with them. 
      You are also able to communicate with animals and plants, although their conversations might be more basic.`,
    },
  ])
}
