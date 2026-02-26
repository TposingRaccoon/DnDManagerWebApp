export interface level {
  id: string
  index: string
  class: Class
  subclass?: Subclass
  lvl: number
  abilityScoreBonuses?: number
  profBonus?: number
  features: Feature[]
  classSpecific?: ClassSpecific
  spellcasting?: Spellcasting
}

export interface Class {
  index: string
  name: string
}

export interface Subclass {
  index: string
  name: string
}

export interface Feature {
  index: string
  name: string
}

export interface ClassSpecific {
  rageCount?: number
  rageDamageBonus?: number
  brutalCriticalDiceCount?: number
  barbicInspirationDie?: number
  songOfRestDie?: number
  magicalSecretsMax5?: number
  channelDivinityCharges?: number
  destroyUndeadCR?: number
  wildShapeMaxCR?: number
  wildShapeSwim?: boolean
  wildShapeFly?: boolean
  auraRange?: number
  arcaneRecoveryLevels?: number
  additionalMagicalSecretMaxLvl: any
  invocations_Known?: number
  mysticArcanumLevel6?: number
  mysticArcanumLevel7?: number
  mysticArcanumLevel8?: number
  mysticArcanumLevel9?: number
}

export interface Spellcasting {
  cantripsKnown?: number
  spellsKnown: any
  spellSlotsLevel1: number
  spellSlotsLevel2: number
  spellSlotsLevel3: number
  spellSlotsLevel4: number
  spellSlotsLevel5: number
  spellSlotsLevel6?: number
  spellSlotsLevel7?: number
  spellSlotsLevel8?: number
  spellSlotsLevel9?: number
}
