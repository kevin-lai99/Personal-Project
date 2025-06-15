import request from 'superagent'
import { Character } from '../../models/character'
const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllCharacter() {
  const response = await request.get(`${rootURL}/character`)
  return response.body as Character[]
}

export async function getCharacterById(character_id: number | string) {
  const response = await request.get(`${rootURL}/character/${character_id}`)
  return response.body
}
