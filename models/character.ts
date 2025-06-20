export interface characterData {
  character_name: string
  description: string
  class: string
  level: number
  icon: string
}

export interface Character extends characterData {
  character_id: number
}
