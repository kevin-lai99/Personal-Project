import connection from './connection.js'

import { characterData } from '../../models/character.js'

export async function getAllCharacter(): Promise<characterData[]> {
  const character = await connection('character').select()

  return character as characterData[]
}

export async function getCharacterById(id: string): Promise<characterData> {
  const character = await connection('character')
    .where('character_id', id)
    .select()
    .first()
  return character as characterData
}
