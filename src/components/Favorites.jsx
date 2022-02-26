import React from 'react'
import styles from './Favorites.module.css'

function Favorites({image, name}) {
    const firstName = name.split(' ')
  return (
    <div className={styles.itemContainer} >
        <img className={styles.image} src={image} alt={name} />
        <p className={styles.name} >{firstName[0]}</p>
    </div>
  )
}

export { Favorites }