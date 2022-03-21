import React from 'react'
import styles from './Character.module.css'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FaHeart, FaRegHeart } from "react-icons/fa"

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
                <LazyLoadImage 
                    className={styles.imageCharacter} 
                    src={character.image} 
                    alt={character.name} 
                    width='100%'
                    min-height='144'
                    effect='blur'
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