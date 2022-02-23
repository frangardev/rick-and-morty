import React from 'react'
import styles from './Character.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function CharacterItem({ character, onFavorite }) {
    const [hover, setHover] = React.useState(false)
    
    return (
        <figure 
            className={styles.CharacterItem}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            key={character.id}
        >
            <div className={styles.imageContainer}>
                <img 
                    className={styles.imageCharacter} 
                    src={character.image} 
                    alt={character.name} 
                    loading='lazy'
                />

               <ul 
                    className={`${styles.dataCharacterContainer} ${hover && styles.dataCharacterHover}`}
                >
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
            </div>

            <figcaption>
                <h2 className={styles.nameCharacter}>{character.name}</h2>
                <button
                    onClick={()=> onFavorite(character)}
                >
                    <FontAwesomeIcon icon={ faHeart }/>
                </button>
            </figcaption>
        </figure>
    )
}

export { CharacterItem }