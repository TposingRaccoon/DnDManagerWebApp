export interface Subrace {
  id: string
  index: string
  name: string
  race: Race
  desc: string
  abilityBonuses: AbilityBonuse[]
  racialTraits: RacialTrait[]
}

export interface Race {
  index: string
  name: string
}

export interface AbilityBonuse {
  abilityScore: AbilityScore
  bonus: number
}

export interface AbilityScore {
  index: string
  name: string
}

export interface RacialTrait {
  index: string
  name: string
}
