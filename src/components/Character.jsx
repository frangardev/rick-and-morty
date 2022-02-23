import React, { Children } from 'react'
import styles from './Character.module.css'

function Character(props) {
  return (
    <section className={`${styles.Characters} ${props.isDark && styles.dark}`}>
       {props.children}
    </section>
  )
}


export { Character }