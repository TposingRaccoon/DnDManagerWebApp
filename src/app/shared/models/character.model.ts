import { Subclass } from "./level.model"

export interface character{
    id? : number,
    username : string,
    name : string,
    race : Race,
    subrace : Subrace,
    str : number
    dex : number
    con : number
    int : number
    wis : number
    cha : number
    background? : Background,
    proficiency? : Proficiency[],
    languages? : Language[],
    class? : Class,
    totalLevel? : number,
    proficiencyBonus? : number,
    classLevels? : ClassLevel[],
    subclasses? : string[]
    equipements? : Equipements[],
    skills? : Skill[],
    spells? : Spell[],
    classSpecific? : classSpecifics[],
    spellcastings? : spellcastings[],
    features? : Feature[]
    
}
export interface Race {
  index?: string
  name?: string
}
export interface Subrace {
  index?: string
  name?: string
}
export interface Background {
  index?: string
  name?: string
}
export interface Proficiency {
  index?: string
  name?: string
}
export interface Language {
  index?: string
  name?: string
}
export interface Spell {
  index?: string
  name?: string
}
export interface Class {
  index?: string
  name?: string
}
export interface Skill {
  index?: string
  name?: string
}
export interface Equipements {
  index?: string
  name?: string
}
export interface Feat {
  index?: string
  name?: string
}
export interface Feature {
  index?: string
  name?: string
}
export interface ClassLevel {
  name?: string
  level?: number
}
export interface classSpecifics{
    classIndex? :string,
    ClassSpecific? : ClassSpecific
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
export interface spellcastings{
    classIndex? :string,
    Spellcasting? : Spellcasting
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