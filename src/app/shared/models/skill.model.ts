export interface Skill {
  id: string
  index: string
  name: string
  desc: string[]
  abilityScore: AbilityScore
}

export interface AbilityScore {
  index: string
  name: string
}
