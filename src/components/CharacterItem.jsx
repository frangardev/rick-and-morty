import React from 'react'
import styles from './Character.module.css'

import { FaHeart, FaRegHeart } from "react-icons/fa";

function CharacterItem({ character, onFavorite, favorites }) {
    const [hover, setHover] = React.useState(false)
    
    const isFavorite = favorites.some(item => item.id === character.id) 

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
                    className={styles.favoriteButton}
                    onClick={()=>{ 
                        onFavorite(character)
                    }}
                >
                    {isFavorite 
                        ? (<FaHeart className={styles.favoriteIcon}/> ) 
                        : (<FaRegHeart className={styles.favoriteIcon}/> )
                    }
                </button>
            </figcaption>
        </figure>
    )
}

export { CharacterItem }