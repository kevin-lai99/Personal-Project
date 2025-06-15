import { Link } from 'react-router'
import { useAllCharacter } from '../hooks/useCharacter.ts'

import { Character } from '../../models/character.ts'
import '../styles/index.scss'

function CharacterList() {
  const { data, isLoading, isError } = useAllCharacter()

  if (isLoading) return <p className="loading-text">Loading characters...</p>
  if (isError || !data)
    return <p className="error-text">Failed to load characters.</p>

  return (
    <div className="character-list-page">
      <h1 className="page-title">Characters</h1>

      <div className="character-list">
        {data.map((character: Character) => (
          <div
            key={character.character_name}
            className="character-card"
            title={`${character.class} Lv.${character.level} - ${character.description}`}
          >
            <Link
              to={`/character/${character.character_id}`}
              className="character-icon-link"
              aria-label={`View details for ${character.character_name}`}
            >
              <img
                src={character.icon}
                alt={character.character_name}
                className="character-icon"
              />
            </Link>
            <h2 className="character-name">{character.character_name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterList
