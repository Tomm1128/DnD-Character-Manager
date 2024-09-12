interface Character {
  name: string
  heightFeet: number
  heightInches: number
  weight: string
  height: string
  alignment: string
  languages: string[]
  level: number
  race: string
  class: string
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  ideals: string
  bonds: string
  flaws: string
  inspirationPoints: number
  background: string
  additionalBackgroundNotes: string
  spells: string[]
  id?: number
}

interface FormData {
  name: string
  heightFeet: string
  heightInches: string
  weight: string
  height: string
  alignment: string
  languages: string[]
  level: string
  race: string
  class: string
  strength: string
  dexterity: string
  constitution: string
  intelligence: string
  wisdom: string
  charisma: string
  ideals: string
  bonds: string
  flaws: string
  inspirationPoints: string
  background: string
  additionalBackgroundNotes: string
  spells: string[]
}

interface Spell {
  index: string
  name: string
}

export type { Character, FormData, Spell }
