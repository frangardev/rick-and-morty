import React from 'react' //rfce
import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


function Header({children, darkMode, setDarkMode}) {
  return (
    <header className={`${styles.Header} ${darkMode && styles.dark}`}>
        <h1 className={styles.title}>React Hooks</h1>
        <button
            type='button'
            className={styles.darkModeButton}
            onClick={()=> setDarkMode(!darkMode) }
        >
            {!darkMode ? 'Dark Mode' : 'Light Mode'}
            <FontAwesomeIcon icon={!darkMode ? faMoon : faSun} className={styles.icon}/>
        </button>
        
        {children}

    </header>
  )
}

export { Header }

