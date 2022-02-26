import React from 'react'
import styles from './Favorites.module.css'

function FavoeitesContainer(props) {
  return (
    <section className={`${styles.FavoriteCharacters} ${props.isDark && styles.dark}`}>
        <h2 className={styles.title}>Favorites</h2>
        <div className={styles.FavoriteCharactersContainer}>
            {props.children}
        </div>
    </section>
  )
}

export { FavoeitesContainer }