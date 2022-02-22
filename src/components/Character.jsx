import React from 'react'
import styles from './Character.module.css'

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
            <article className={styles.CharacterItem} key={character.id}>
                <figure>
                    <img className={styles.imageCharacter} src={character.image} alt={character.name} loading='lazy'/>
                    <figcaption>
                        <h2 className={styles.nameCharacter}>{character.name}</h2>
                    </figcaption>
                </figure>

                <ul className={styles.dataCharacterContainer}>
                    <li className={styles.characterData}>
                        <samp className={styles.dataSpan}>Species: </samp>{character.species}
                    </li>
                    <li className={styles.characterData}>
                        <samp className={styles.dataSpan}>Gender: </samp>{character.gender}
                    </li>
                    <li className={styles.characterData}>
                        <samp className={styles.dataSpan}>Origin: </samp>{character.origin.name}
                    </li>
                    <li className={styles.characterData}>
                        <samp className={styles.dataSpan}>Location: </samp>{character.location.name}
                    </li>
                    <li className={styles.characterData}>
                        <samp className={styles.dataSpan}>Status: </samp>{character.status}
                    </li>
                </ul>

            </article>
        ))}
    </section>
  )
}

export { Character }