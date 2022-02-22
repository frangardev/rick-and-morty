import React from 'react'
import styles from './Character.module.css'
import { CharacterItem } from './CharacterItem'

function Character({isDark}) {
    const [characters, setCharacters] = React.useState([])
    
    React.useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

  return (
    <section className={`${styles.Characters} ${isDark && styles.dark}`}>
        {characters.map(character =>(
            <CharacterItem
                character = {character}
                key={character.id}
            />
        ))}
    </section>
  )
}

export { Character }