import { useParams } from 'react-router'
import { useCharacterById } from '../hooks/useCharacter.ts'
import '../styles/index.scss'

function Character() {
  const { id } = useParams()
  const { data, isLoading, isError } = useCharacterById(id || '')

  if (isLoading) return <p className="loading-text">Loading character...</p>
  if (isError || !data)
    return <p className="error-text">Failed to load character.</p>

  return (
    <div className="character-list-page">
      <div className="character-detail-card">
        <img
          src={data.icon}
          alt={data.character_name}
          className="character-icon"
        />

        <div className="character-details">
          <h1 className="character-name">{data.character_name}</h1>
          <div className="character-level">
            Level {data.level} - {data.class}
          </div>

          <div className="character-description-box">{data.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Character
