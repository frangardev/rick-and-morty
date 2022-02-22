import React from 'react' //rfce
import styles from './Header.module.css'

function Header({darkMode, setDarkMode}) {
  return (
    <header className={`${styles.Header} ${darkMode && styles.dark}`}>
        <h1 className={styles.title}>React Hooks</h1>
        <button
            type='button'
            className={styles.darkModeButton}
            onClick={()=> setDarkMode(!darkMode) }
        >
            {!darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
        <br />
    </header>
  )
}

export { Header }

