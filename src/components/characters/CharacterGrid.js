import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({characters, isLoading}) => {
  return (
      isLoading ? <Spinner/> : <section className='cards'>
          {characters.filter(character => character.char_id !== 3 && character.char_id !== 39).map(character => (
              <CharacterItem key={character.char_id} character={character}></CharacterItem>
          ))}
      </section>
  )
}

export default CharacterGrid