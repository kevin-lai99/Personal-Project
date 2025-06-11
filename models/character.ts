export interface characterData {
  character_name: string
  description: string
  class: string
}

export interface Character extends characterData {
  character_id: number
}
