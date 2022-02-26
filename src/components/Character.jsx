import React from 'react'
import styles from './Character.module.css'

function Character(props) {
  return (
    <section>
      <h2 className={styles.title}>Characters</h2>
      <div className={styles.Characters}>
        {props.children}
      </div>
    </section>
  )
}


export { Character }