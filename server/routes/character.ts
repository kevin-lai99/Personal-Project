import express from 'express'
import * as db from '../db/character.ts'
const character = express.Router()

character.get('/character', async (req, res, next) => {
  try {
    const locations = await db.getAllCharacter()

    res.json(locations)
  } catch (e) {
    next(e)
  }
})

character.get('/character/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    const locations = await db.getCharacterById(id)

    res.json(locations)
  } catch (e) {
    next(e)
  }
})

export default character
