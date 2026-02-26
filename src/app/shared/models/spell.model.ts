export interface Spell {
  id: string
  index: string
  name: string
  desc: string[]
  higherLevel?: string[]
  range: string
  components: string[]
  material?: string
  ritual: boolean
  duration: string
  concentration: boolean
  castingTime: string
  level: number
  attackType?: string
  damage?: Damage
  school?: School
  classes: Class[]
  subclasses: Subclass[]
}

export interface Damage {
  damageType?: DamageType
  damageAtSlotLevel?: DamageAtSlotLevel
}

export interface DamageType {
  index: string
  name: string
}

export interface DamageAtSlotLevel {
  lvl1?: any
  lvl2?: string
  lvl3?: string
  lvl4?: string
  lvl5?: string
  lvl6?: string
  lvl7?: string
  lvl8?: string
  lvl9?: string
}

export interface School {
  index: string
  name: string
}

export interface Class {
  index: string
  name: string
}

export interface Subclass {
  index: string
  name: string
}
