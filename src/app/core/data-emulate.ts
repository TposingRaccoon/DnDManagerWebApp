import { Injectable } from '@angular/core';
import { character } from '../shared/models/character.model';
import { Race } from '../shared/models/race.model';
import { level } from '../shared/models/level.model';
import { Spell } from '../shared/models/spell.model';

@Injectable({
  providedIn: 'root',
})
export class DataEmulate {
  characters: character[] = [

{
  id: 1,
  username: "ironwolf",
  name: "Thorgar Stonefist",
  race: { index: "dwarf", name: "Dwarf" },
  subrace: { index: "hill-dwarf", name: "Hill Dwarf" },
  str: 18,
  dex: 12,
  con: 16,
  int: 8,
  wis: 13,
  cha: 10,
  background: { index: "soldier", name: "Soldier" },
  proficiency: [
    { index: "light-armor", name: "Light Armor" },
    { index: "medium-armor", name: "Medium Armor" },
    { index: "battleaxes", name: "Battleaxes" }
  ],
  languages: [
    { index: "common", name: "Common" },
    { index: "dwarvish", name: "Dwarvish" }
  ],
  class: { index: "barbarian", name: "Barbarian" },
  totalLevel: 5,
  proficiencyBonus: 3,
  classLevels: [{ name: "Barbarian", level: 5 }],
  subclasses: ["berserker"],
  skills: [
    { index: "athletics", name: "Athletics" },
    { index: "intimidation", name: "Intimidation" }
  ],
  classSpecific: [{
    classIndex: "barbarian",
    ClassSpecific: {
      rageCount: 3,
      rageDamageBonus: 2,
      brutalCriticalDiceCount: 1,
      additionalMagicalSecretMaxLvl: undefined
    }
  }]
},

{
  id: 2,
  username: "silverleaf",
  name: "Aelar Moonwhisper",
  race: { index: "elf", name: "Elf" },
  subrace: { index: "high-elf", name: "High Elf" },
  str: 8,
  dex: 16,
  con: 12,
  int: 18,
  wis: 14,
  cha: 11,
  background: { index: "sage", name: "Sage" },
  languages: [
    { index: "common", name: "Common" },
    { index: "elvish", name: "Elvish" }
  ],
  class: { index: "wizard", name: "Wizard" },
  totalLevel: 7,
  proficiencyBonus: 3,
  classLevels: [{ name: "Wizard", level: 7 }],
  subclasses: ["evocation"],
  spells: [
    { index: "fireball", name: "Fireball" },
    { index: "magic-missile", name: "Magic Missile" }
  ],
  spellcastings: [{
    classIndex: "wizard",
    Spellcasting: {
      cantripsKnown: 4,
      spellsKnown: "Spellbook",
      spellSlotsLevel1: 4,
      spellSlotsLevel2: 3,
      spellSlotsLevel3: 3,
      spellSlotsLevel4: 1,
      spellSlotsLevel5: 0
    }
  }]
},

{
  id: 3,
  username: "shadowstep",
  name: "Lyra Nightshade",
  race: { index: "halfling", name: "Halfling" },
  subrace: { index: "lightfoot", name: "Lightfoot" },
  str: 9,
  dex: 18,
  con: 13,
  int: 12,
  wis: 14,
  cha: 16,
  background: { index: "criminal", name: "Criminal" },
  languages: [
    { index: "common", name: "Common" },
    { index: "halfling", name: "Halfling" }
  ],
  class: { index: "rogue", name: "Rogue" },
  totalLevel: 6,
  proficiencyBonus: 3,
  classLevels: [{ name: "Rogue", level: 6 }],
  subclasses: ["arcane-trickster"],
  skills: [
    { index: "stealth", name: "Stealth" },
    { index: "sleight-of-hand", name: "Sleight of Hand" }
  ]
},

{
  id: 4,
  username: "lightbringer",
  name: "Seraphina Dawn",
  race: { index: "human", name: "Human" },
  subrace: { index: "variant-human", name: "Variant Human" },
  str: 14,
  dex: 10,
  con: 14,
  int: 10,
  wis: 18,
  cha: 16,
  background: { index: "acolyte", name: "Acolyte" },
  languages: [
    { index: "common", name: "Common" },
    { index: "celestial", name: "Celestial" }
  ],
  class: { index: "cleric", name: "Cleric" },
  totalLevel: 8,
  proficiencyBonus: 3,
  classLevels: [{ name: "Cleric", level: 8 }],
  subclasses: ["life-domain"],
  spells: [
    { index: "cure-wounds", name: "Cure Wounds" },
    { index: "spirit-guardians", name: "Spirit Guardians" }
  ],
  spellcastings: [{
    classIndex: "cleric",
    Spellcasting: {
      cantripsKnown: 4,
      spellsKnown: "Prepared",
      spellSlotsLevel1: 4,
      spellSlotsLevel2: 3,
      spellSlotsLevel3: 3,
      spellSlotsLevel4: 2,
      spellSlotsLevel5: 1
    }
  }]
},

{
  id: 5,
  username: "wildheart",
  name: "Kaelin Stormroot",
  race: { index: "half-elf", name: "Half-Elf" },
  subrace: { index: "wood-half-elf", name: "Wood Half-Elf" },
  str: 12,
  dex: 14,
  con: 13,
  int: 10,
  wis: 17,
  cha: 12,
  background: { index: "outlander", name: "Outlander" },
  languages: [
    { index: "common", name: "Common" },
    { index: "elvish", name: "Elvish" }
  ],
  class: { index: "druid", name: "Druid" },
  totalLevel: 9,
  proficiencyBonus: 4,
  classLevels: [{ name: "Druid", level: 9 }],
  subclasses: ["circle-of-the-moon"],
  classSpecific: [{
    classIndex: "druid",
    ClassSpecific: {
      wildShapeMaxCR: 1,
      wildShapeSwim: true,
      wildShapeFly: false,
      additionalMagicalSecretMaxLvl: undefined
    }
  }],
  spellcastings: [{
    classIndex: "druid",
    Spellcasting: {
      cantripsKnown: 4,
      spellsKnown: "Prepared",
      spellSlotsLevel1: 4,
      spellSlotsLevel2: 3,
      spellSlotsLevel3: 3,
      spellSlotsLevel4: 3,
      spellSlotsLevel5: 1
    }
  }]
}

]
 races: Race[] = [
  {
    "id": "69421d8b0169d4fbe436fa54",
    "index": "dwarf",
    "name": "Dwarf",
    "speed": 25,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "con",
          "name": "CON"
        },
        "bonus": 2
      }
    ],
    "alignement": undefined,
    "age": "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    "size": "Medium",
    "sizeDescription": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "dwarvish",
        "name": "Dwarvish"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
    "traits": [
      {
        "index": "darkvision",
        "name": "Darkvision"
      },
      {
        "index": "dwarven-resilience",
        "name": "Dwarven Resilience"
      },
      {
        "index": "stonecunning",
        "name": "Stonecunning"
      },
      {
        "index": "dwarven-combat-training",
        "name": "Dwarven Combat Training"
      },
      {
        "index": "tool-proficiency",
        "name": "Tool Proficiency"
      }
    ],
    "subraces": [
      {
        "index": "hill-dwarf",
        "name": "Hill Dwarf"
      }
    ]
  },
  {
    "id": "69421d8b0169d4fbe436fa55",
    "index": "elf",
    "name": "Elf",
    "speed": 30,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "dex",
          "name": "DEX"
        },
        "bonus": 2
      }
    ],
    "alignement": undefined,
    "age": "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    "size": "Medium",
    "sizeDescription": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "elvish",
        "name": "Elvish"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
    "traits": [
      {
        "index": "darkvision",
        "name": "Darkvision"
      },
      {
        "index": "fey-ancestry",
        "name": "Fey Ancestry"
      },
      {
        "index": "trance",
        "name": "Trance"
      },
      {
        "index": "keen-senses",
        "name": "Keen Senses"
      }
    ],
    "subraces": [
      {
        "index": "high-elf",
        "name": "High Elf"
      }
    ]
  },
  {
    "id": "69421d8b0169d4fbe436fa56",
    "index": "halfling",
    "name": "Halfling",
    "speed": 25,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "dex",
          "name": "DEX"
        },
        "bonus": 2
      }
    ],
    "alignement": undefined,
    "age": "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
    "size": "Small",
    "sizeDescription": "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "halfling",
        "name": "Halfling"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    "traits": [
      {
        "index": "brave",
        "name": "Brave"
      },
      {
        "index": "halfling-nimbleness",
        "name": "Halfling Nimbleness"
      },
      {
        "index": "lucky",
        "name": "Lucky"
      }
    ],
    "subraces": [
      {
        "index": "lightfoot-halfling",
        "name": "Lightfoot Halfling"
      }
    ]
  },
  {
    "id": "69421d8b0169d4fbe436fa57",
    "index": "human",
    "name": "Human",
    "speed": 30,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "str",
          "name": "STR"
        },
        "bonus": 1
      },
      {
        "abilityScore": {
          "index": "dex",
          "name": "DEX"
        },
        "bonus": 1
      },
      {
        "abilityScore": {
          "index": "con",
          "name": "CON"
        },
        "bonus": 1
      },
      {
        "abilityScore": {
          "index": "int",
          "name": "INT"
        },
        "bonus": 1
      },
      {
        "abilityScore": {
          "index": "wis",
          "name": "WIS"
        },
        "bonus": 1
      },
      {
        "abilityScore": {
          "index": "cha",
          "name": "CHA"
        },
        "bonus": 1
      }
    ],
    "alignement": undefined,
    "age": "Humans reach adulthood in their late teens and live less than a century.",
    "size": "Medium",
    "sizeDescription": "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
    "traits": [],
    "subraces": []
  },
  {
    "id": "69421d8b0169d4fbe436fa58",
    "index": "dragonborn",
    "name": "Dragonborn",
    "speed": 30,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "str",
          "name": "STR"
        },
        "bonus": 2
      },
      {
        "abilityScore": {
          "index": "cha",
          "name": "CHA"
        },
        "bonus": 1
      }
    ],
    "alignement": undefined,
    "age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
    "size": "Medium",
    "sizeDescription": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "draconic",
        "name": "Draconic"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
    "traits": [
      {
        "index": "draconic-ancestry",
        "name": "Draconic Ancestry"
      },
      {
        "index": "breath-weapon",
        "name": "Breath Weapon"
      },
      {
        "index": "damage-resistance",
        "name": "Damage Resistance"
      }
    ],
    "subraces": []
  },
  {
    "id": "69421d8b0169d4fbe436fa59",
    "index": "gnome",
    "name": "Gnome",
    "speed": 25,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "int",
          "name": "INT"
        },
        "bonus": 2
      }
    ],
    "alignement": undefined,
    "age": "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
    "size": "Small",
    "sizeDescription": "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "gnomish",
        "name": "Gnomish"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
    "traits": [
      {
        "index": "darkvision",
        "name": "Darkvision"
      },
      {
        "index": "gnome-cunning",
        "name": "Gnome Cunning"
      }
    ],
    "subraces": [
      {
        "index": "rock-gnome",
        "name": "Rock Gnome"
      }
    ]
  },
  {
    "id": "69421d8b0169d4fbe436fa5a",
    "index": "half-elf",
    "name": "Half-Elf",
    "speed": 30,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "cha",
          "name": "CHA"
        },
        "bonus": 2
      }
    ],
    "alignement": undefined,
    "age": "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
    "size": "Medium",
    "sizeDescription": "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "elvish",
        "name": "Elvish"
      }
    ],
    "languageDesc": "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
    "traits": [
      {
        "index": "darkvision",
        "name": "Darkvision"
      },
      {
        "index": "fey-ancestry",
        "name": "Fey Ancestry"
      },
      {
        "index": "skill-versatility",
        "name": "Skill Versatility"
      }
    ],
    "subraces": []
  },
  {
    "id": "69421d8b0169d4fbe436fa5b",
    "index": "half-orc",
    "name": "Half-Orc",
    "speed": 30,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "str",
          "name": "STR"
        },
        "bonus": 2
      },
      {
        "abilityScore": {
          "index": "con",
          "name": "CON"
        },
        "bonus": 1
      }
    ],
    "alignement": undefined,
    "age": "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
    "size": "Medium",
    "sizeDescription": "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "orc",
        "name": "Orc"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
    "traits": [
      {
        "index": "darkvision",
        "name": "Darkvision"
      },
      {
        "index": "savage-attacks",
        "name": "Savage Attacks"
      },
      {
        "index": "relentless-endurance",
        "name": "Relentless Endurance"
      },
      {
        "index": "menacing",
        "name": "Menacing"
      }
    ],
    "subraces": []
  },
  {
    "id": "69421d8b0169d4fbe436fa5c",
    "index": "tiefling",
    "name": "Tiefling",
    "speed": 30,
    "abilityBonuses": [
      {
        "abilityScore": {
          "index": "int",
          "name": "INT"
        },
        "bonus": 1
      },
      {
        "abilityScore": {
          "index": "cha",
          "name": "CHA"
        },
        "bonus": 2
      }
    ],
    "alignement": undefined,
    "age": "Tieflings mature at the same rate as humans but live a few years longer.",
    "size": "Medium",
    "sizeDescription": "Tieflings are about the same size and build as humans. Your size is Medium.",
    "languages": [
      {
        "index": "common",
        "name": "Common"
      },
      {
        "index": "infernal",
        "name": "Infernal"
      }
    ],
    "languageDesc": "You can speak, read, and write Common and Infernal.",
    "traits": [
      {
        "index": "darkvision",
        "name": "Darkvision"
      },
      {
        "index": "hellish-resistance",
        "name": "Hellish Resistance"
      },
      {
        "index": "infernal-legacy",
        "name": "Infernal Legacy"
      }
    ],
    "subraces": []
  }
]
 startingLevels: level[] =[
  {
    "id": "69421d8b0169d4fbe436f5fd",
    "index": "barbarian-1",
    "class": {
      "index": "barbarian",
      "name": "Barbarian"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "rage",
        "name": "Rage"
      },
      {
        "index": "barbarian-unarmored-defense",
        "name": "Unarmored Defense"
      }
    ],
    "classSpecific": {
      "rageCount": 2,
      "rageDamageBonus": 2,
      "brutalCriticalDiceCount": 0,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": undefined
  },
  {
    "id": "69421d8b0169d4fbe436f611",
    "index": "bard-1",
    "class": {
      "index": "bard",
      "name": "Bard"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "spellcasting-bard",
        "name": "Spellcasting: Bard"
      },
      {
        "index": "bardic-inspiration-d6",
        "name": "Bardic Inspiration (d6)"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": 6,
      "songOfRestDie": 0,
      "magicalSecretsMax5": 0,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": 2,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 2,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": 0,
      "spellSlotsLevel7": 0,
      "spellSlotsLevel8": 0,
      "spellSlotsLevel9": 0
    }
  },
  {
    "id": "69421d8b0169d4fbe436f625",
    "index": "cleric-1",
    "class": {
      "index": "cleric",
      "name": "Cleric"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "spellcasting-cleric",
        "name": "Spellcasting: Cleric"
      },
      {
        "index": "divine-domain",
        "name": "Divine Domain"
      },
      {
        "index": "domain-spells-1",
        "name": "Domain Spells"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": 0,
      "destroyUndeadCR": 0,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": 3,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 2,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": 0,
      "spellSlotsLevel7": 0,
      "spellSlotsLevel8": 0,
      "spellSlotsLevel9": 0
    }
  },
  {
    "id": "69421d8b0169d4fbe436f639",
    "index": "druid-1",
    "class": {
      "index": "druid",
      "name": "Druid"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "spellcasting-druid",
        "name": "Spellcasting: Druid"
      },
      {
        "index": "druidic",
        "name": "Druidic"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": 0,
      "wildShapeSwim": false,
      "wildShapeFly": false,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": 2,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 2,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": 0,
      "spellSlotsLevel7": 0,
      "spellSlotsLevel8": 0,
      "spellSlotsLevel9": 0
    }
  },
  {
    "id": "69421d8b0169d4fbe436f64d",
    "index": "fighter-1",
    "class": {
      "index": "fighter",
      "name": "Fighter"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "fighter-fighting-style",
        "name": "Fighting Style"
      },
      {
        "index": "second-wind",
        "name": "Second Wind"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": undefined
  },
  {
    "id": "69421d8b0169d4fbe436f661",
    "index": "monk-1",
    "class": {
      "index": "monk",
      "name": "Monk"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "monk-unarmored-defense",
        "name": "Unarmored Defense"
      },
      {
        "index": "martial-arts",
        "name": "Martial Arts"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": undefined
  },
  {
    "id": "69421d8b0169d4fbe436f675",
    "index": "paladin-1",
    "class": {
      "index": "paladin",
      "name": "Paladin"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "divine-sense",
        "name": "Divine Sense"
      },
      {
        "index": "lay-on-hands",
        "name": "Lay on Hands"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": 0,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": undefined,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 0,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": undefined,
      "spellSlotsLevel7": undefined,
      "spellSlotsLevel8": undefined,
      "spellSlotsLevel9": undefined
    }
  },
  {
    "id": "69421d8b0169d4fbe436f689",
    "index": "ranger-1",
    "class": {
      "index": "ranger",
      "name": "Ranger"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "favored-enemy-1-type",
        "name": "Favored Enemy (1 type)"
      },
      {
        "index": "natural-explorer-1-terrain-type",
        "name": "Natural Explorer (1 terrain type)"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": undefined,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 0,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": undefined,
      "spellSlotsLevel7": undefined,
      "spellSlotsLevel8": undefined,
      "spellSlotsLevel9": undefined
    }
  },
  {
    "id": "69421d8b0169d4fbe436f69d",
    "index": "rogue-1",
    "class": {
      "index": "rogue",
      "name": "Rogue"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "rogue-expertise-1",
        "name": "Expertise"
      },
      {
        "index": "sneak-attack",
        "name": "Sneak Attack"
      },
      {
        "index": "thieves-cant",
        "name": "Thieves' Cant"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": undefined
  },
  {
    "id": "69421d8b0169d4fbe436f6b1",
    "index": "sorcerer-1",
    "class": {
      "index": "sorcerer",
      "name": "Sorcerer"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "spellcasting-sorcerer",
        "name": "Spellcasting: Sorcerer"
      },
      {
        "index": "sorcerous-origin",
        "name": "Sorcerous Origin"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": 4,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 2,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": 0,
      "spellSlotsLevel7": 0,
      "spellSlotsLevel8": 0,
      "spellSlotsLevel9": 0
    }
  },
  {
    "id": "69421d8b0169d4fbe436f6c5",
    "index": "warlock-1",
    "class": {
      "index": "warlock",
      "name": "Warlock"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "otherworldly-patron",
        "name": "Otherworldly Patron"
      },
      {
        "index": "pact-magic",
        "name": "Pact Magic"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": undefined,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": 0,
      "mysticArcanumLevel6": 0,
      "mysticArcanumLevel7": 0,
      "mysticArcanumLevel8": 0,
      "mysticArcanumLevel9": 0
    },
    "spellcasting": {
      "cantripsKnown": 2,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 1,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": 0,
      "spellSlotsLevel7": 0,
      "spellSlotsLevel8": 0,
      "spellSlotsLevel9": 0
    }
  },
  {
    "id": "69421d8b0169d4fbe436f6d9",
    "index": "wizard-1",
    "class": {
      "index": "wizard",
      "name": "Wizard"
    },
    "subclass": undefined,
    "lvl": 1,
    "abilityScoreBonuses": 0,
    "profBonus": 2,
    "features": [
      {
        "index": "spellcasting-wizard",
        "name": "Spellcasting: Wizard"
      },
      {
        "index": "arcane-recovery",
        "name": "Arcane Recovery"
      }
    ],
    "classSpecific": {
      "rageCount": undefined,
      "rageDamageBonus": undefined,
      "brutalCriticalDiceCount": undefined,
      "barbicInspirationDie": undefined,
      "songOfRestDie": undefined,
      "magicalSecretsMax5": undefined,
      "channelDivinityCharges": undefined,
      "destroyUndeadCR": undefined,
      "wildShapeMaxCR": undefined,
      "wildShapeSwim": undefined,
      "wildShapeFly": undefined,
      "auraRange": undefined,
      "arcaneRecoveryLevels": 1,
      "additionalMagicalSecretMaxLvl": undefined,
      "invocations_Known": undefined,
      "mysticArcanumLevel6": undefined,
      "mysticArcanumLevel7": undefined,
      "mysticArcanumLevel8": undefined,
      "mysticArcanumLevel9": undefined
    },
    "spellcasting": {
      "cantripsKnown": 3,
      "spellsKnown": undefined,
      "spellSlotsLevel1": 2,
      "spellSlotsLevel2": 0,
      "spellSlotsLevel3": 0,
      "spellSlotsLevel4": 0,
      "spellSlotsLevel5": 0,
      "spellSlotsLevel6": 0,
      "spellSlotsLevel7": 0,
      "spellSlotsLevel8": 0,
      "spellSlotsLevel9": 0
    }
  },
  {
    "id": "69421d8b0169d4fbe436f6f4",
    "index": "life-1",
    "class": {
      "index": "cleric",
      "name": "Cleric"
    },
    "subclass": {
      "index": "life",
      "name": "Life"
    },
    "lvl": 1,
    "abilityScoreBonuses": undefined,
    "profBonus": undefined,
    "features": [
      {
        "index": "bonus-proficiency",
        "name": "Bonus Proficiency"
      },
      {
        "index": "disciple-of-life",
        "name": "Disciple of Life"
      }
    ],
    "classSpecific": undefined,
    "spellcasting": undefined
  },
  {
    "id": "69421d8b0169d4fbe436f713",
    "index": "draconic-1",
    "class": {
      "index": "sorcerer",
      "name": "Sorcerer"
    },
    "subclass": {
      "index": "draconic",
      "name": "Draconic"
    },
    "lvl": 1,
    "abilityScoreBonuses": undefined,
    "profBonus": undefined,
    "features": [
      {
        "index": "dragon-ancestor",
        "name": "Dragon Ancestor"
      },
      {
        "index": "draconic-resilience",
        "name": "Draconic Resilience"
      }
    ],
    "classSpecific": undefined,
    "spellcasting": undefined
  },
  {
    "id": "69421d8b0169d4fbe436f717",
    "index": "fiend-1",
    "class": {
      "index": "warlock",
      "name": "Warlock"
    },
    "subclass": {
      "index": "fiend",
      "name": "Fiend"
    },
    "lvl": 1,
    "abilityScoreBonuses": undefined,
    "profBonus": undefined,
    "features": [
      {
        "index": "dark-ones-blessing",
        "name": "Dark One's Blessing"
      }
    ],
    "classSpecific": undefined,
    "spellcasting": undefined
  }
]
dndRacesWithSubraces: Record<string, string[]> = { dragonborn: [
    "Black",
    "Blue",
    "Brass",
    "Bronze",
    "Copper",
    "Gold",
    "Green",
    "Red",
    "Silver",
    "White",
    "Chromatic",
    "Metallic",
    "Gem"
  ],

  dwarf: [
    "Hill Dwarf",
    "Mountain Dwarf",
    "Duergar"
  ],

  elf: [
    "High Elf",
    "Wood Elf",
    "Drow"
  ],

  gnome: [
    "Forest Gnome",
    "Rock Gnome",
    "Deep Gnome"
  ],

  "half-elf": [
    "Half High Elf",
    "Half Wood Elf",
    "Half Drow"
  ],

  halfling: [
    "Lightfoot",
    "Stout",
    "Ghostwise",
    "Lotusden"
  ],

  tiefling: [
    "Asmodeus",
    "Baalzebul",
    "Dispater",
    "Fierna",
    "Glasya",
    "Levistus",
    "Mammon",
    "Mephistopheles",
    "Zariel"
  ]

}
dndClassCantrips: Record<string, string[]> = {
  Artificer: [
    "Acid Splash",
    "Booming Blade",
    "Create Bonfire",
    "Dancing Lights",
    "Fire Bolt",
    "Frostbite",
    "Green-Flame Blade",
    "Guidance",
    "Light",
    "Lightning Lure",
    "Mage Hand",
    "Magic Stone",
    "Mending",
    "Message",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Resistance",
    "Shocking Grasp",
    "Spare the Dying",
    "Sword Burst",
    "Thorn Whip",
    "Thunderclap",
  ],

  Bard: [
    "Blade Ward",
    "Dancing Lights",
    "Friends",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Prestidigitation",
    "Thunderclap",
    "True Strike",
    "Vicious Mockery",
  ],

  Cleric: [
    "Guidance",
    "Light",
    "Mending",
    "Resistance",
    "Sacred Flame",
    "Spare the Dying",
    "Thaumaturgy",
    "Toll the Dead",
    "Word of Radiance",
  ],

  Druid: [
    "Control Flames",
    "Create Bonfire",
    "Druidcraft",
    "Frostbite",
    "Guidance",
    "Gust",
    "Infestation",
    "Magic Stone",
    "Mending",
    "Poison Spray",
    "Produce Flame",
    "Resistance",
    "Shillelagh",
    "Thorn Whip",
    "Thunderclap",
  ],

  Sorcerer: [
    "Acid Splash",
    "Blade Ward",
    "Booming Blade",
    "Chill Touch",
    "Control Flames",
    "Create Bonfire",
    "Dancing Lights",
    "Fire Bolt",
    "Friends",
    "Frostbite",
    "Green-Flame Blade",
    "Gust",
    "Infestation",
    "Light",
    "Lightning Lure",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Shocking Grasp",
    "Sword Burst",
    "Thunderclap",
    "True Strike",
  ],

  Warlock: [
    "Blade Ward",
    "Booming Blade",
    "Chill Touch",
    "Create Bonfire",
    "Eldritch Blast",
    "Friends",
    "Frostbite",
    "Green-Flame Blade",
    "Infestation",
    "Lightning Lure",
    "Mage Hand",
    "Magic Stone",
    "Minor Illusion",
    "Poison Spray",
    "Prestidigitation",
    "Sword Burst",
    "Thunderclap",
    "Toll the Dead",
    "True Strike",
  ],

  Wizard: [
    "Acid Splash",
    "Blade Ward",
    "Booming Blade",
    "Chill Touch",
    "Control Flames",
    "Create Bonfire",
    "Dancing Lights",
    "Fire Bolt",
    "Friends",
    "Frostbite",
    "Green-Flame Blade",
    "Gust",
    "Infestation",
    "Light",
    "Lightning Lure",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Shocking Grasp",
    "Sword Burst",
    "Thunderclap",
    "True Strike",
  ],
};
dndLevel1Spells: Record<string, string[]> = {
  Bard: [
    "Animal Friendship",
    "Bane",
    "Charm Person",
    "Comprehend Languages",
    "Cure Wounds",
    "Detect Magic",
    "Disguise Self",
    "Dissonant Whispers",
    "Faerie Fire",
    "Feather Fall",
    "Healing Word",
    "Heroism",
    "Identify",
    "Illusory Script",
    "Longstrider",
    "Silent Image",
    "Sleep",
    "Speak with Animals",
    "Tasha's Hideous Laughter",
    "Thunderwave",
    "Unseen Servant"
  ],

  Ranger: [
    "Alarm",
    "Animal Friendship",
    "Cure Wounds",
    "Detect Magic",
    "Detect Poison and Disease",
    "Ensnaring Strike",
    "Fog Cloud",
    "Goodberry",
    "Hail of Thorns",
    "Hunter's Mark",
    "Jump",
    "Longstrider",
    "Speak with Animals"
  ],

  Sorcerer: [
    "Burning Hands",
    "Charm Person",
    "Chromatic Orb",
    "Color Spray",
    "Comprehend Languages",
    "Detect Magic",
    "Disguise Self",
    "Expeditious Retreat",
    "False Life",
    "Feather Fall",
    "Fog Cloud",
    "Jump",
    "Mage Armor",
    "Magic Missile",
    "Ray of Sickness",
    "Shield",
    "Silent Image",
    "Sleep",
    "Thunderwave",
    "Witch Bolt"
  ],

  Warlock: [
    "Armor of Agathys",
    "Arms of Hadar",
    "Charm Person",
    "Comprehend Languages",
    "Expeditious Retreat",
    "Hellish Rebuke",
    "Hex",
    "Illusory Script",
    "Protection from Evil and Good",
    "Unseen Servant",
    "Witch Bolt"
  ],
};
}
