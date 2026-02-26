export interface Race {
  id: string
  index: string
  name: string
  speed: number
  abilityBonuses: AbilityBonuse[]
  alignement: any
  age: string
  size: string
  sizeDescription: string
  languages: Language[]
  languageDesc: string
  traits: Trait[]
  subraces: Subrace[]
}

export interface AbilityBonuse {
  abilityScore: AbilityScore
  bonus: number
}

export interface AbilityScore {
  index: string
  name: string
}

export interface Language {
  index: string
  name: string
}

export interface Trait {
  index: string
  name: string
}

export interface Subrace {
  index: string
  name: string
}
