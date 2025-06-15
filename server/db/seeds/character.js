export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('character').del()

  await knex('character').insert([
    {
      character_id: 1,
      character_name: 'Kashimo',
      description: `Was once a follower of the Terrifying, 
      Beautiful, Powerful, Gorgeous, Passionate, Diligent, 
      Overwhelming, Vigorous, Enchanting, Mysterious, Sensual,
      Fearless, Invincible Osas Jr. 
      Kashimo is reincarnated as a human 500 years later to recover the lost albums of the legendary bard. 
      Although the memories of his past life are vague, 
      The sound of Osas jr's music speaks to his soul. 
      Sometimes he feels like he should be an imp with a fork`,
      class: 'Path of the Dragon',
      level: 12,
      icon: '/kashimo.png',
    },
    {
      character_id: 2,
      character_name: 'Daifuku',
      description: `A descendant of Lord Dai Kang who initially looked up to him.
       Daifuku had joined the army starting at a young age because of this. 
       The more he fought, however, the more names of his fallen comrades also increased from each battle.
       Since the day he received a scar on his left cheek from an unsuspecting attacker, 
       Daifuku would occassionally have reoccurring nightmares of the Oni King surrounded by piles of his fellow soldiers, 
       with them grasping onto Daifuku's ankles as he slowly descended into the pile before waking up.
       He eventually found traces of the truth in his ancestor's non-betrayal history and resigned from the army and have a 
       change of scenery as a wanderer...`,
      class: 'Path of the Wolf',
      level: 12,
      icon: '/daifuku.png',
    },
    {
      character_id: 3,
      character_name: 'Da bow',
      description: `Last decendant of Kanye Black and a descendant of Da Bow Black. 
      Currently dual great sword wielder. 
      Da Bow is very famous for his heroic feats saving the most beautiful princess (Ma Bei) in the Whole continent. 
      As they both fall in love, they were getting ready for marriage, 
      her older brother (Zhen Biu) was looking for the legendary Bow and postponed their wedding. 
      As their whole descendents are bow users. Zhen Biu was looking hard for the bow. 
      Da Bow's family was set to spread the words of Yesu all over the west continent. 
      Da Bow was sent on a mission to retreive the lost Book called the Kanyelations (ANCIENT PUZZLE and RIDDLES) which holds 
      the secret location of an ancient artifact given from a old friend/comrade of Da Whei. However the tribe of Da Whei was
       attacked while Da Bow was a on a date with princess Ma Bei. Ma Bei was also missing since then. Da whei sets out on a 
       journey to find out what happened while Princess searches for her brother. Both will set out on their mission before they
        can get married and spread the words of Yesu together.`,
      class: 'Path of the Bull',
      level: 12,
      icon: '/dabow.png',
    },
    {
      character_id: 4,
      character_name: 'Kagura',
      description: `A young prodigy who is a descendant of the Zhu Chen, 
      who appear to have spiritual powers to communicate with spirits and monsters.
      Her father is the youngest brother of the current ruler of Qi, 
      but was banished from the royal family as he was deemed to be a threat to the empire because he married Kagura's mother from the 
      Minamoto family (a foreign tribe known for their ability to summon spirits to aid battles), 
      even though neither of her parents have malicious intent.
      Though she may seem young, she has the passion to restore the empire of Qi, at least to a state of peace.
      Doesn't like to talk much, nor show expressions.`,
      class: 'Path of the Rabbit',
      level: 12,
      icon: '/kagura.png',
    },
  ])
}
