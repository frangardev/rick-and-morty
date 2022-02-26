import React from 'react' //rfce
import styles from './Header.module.css'

import { FaRegSun, FaRegMoon } from "react-icons/fa";

function Header({children, darkMode, setDarkMode}) {
  return (
    <header className={`${styles.Header} ${darkMode && styles.dark}`}>
        <h1 className={styles.title}>React Hooks</h1>
        <button
            type='button'
            className={styles.darkModeButton}
            onClick={()=> setDarkMode(!darkMode) }
        >
            {!darkMode ? 'Dark Mode' : 'Light Mode' }
            {!darkMode ? (<FaRegMoon className={styles.icon}  />) : (<FaRegSun className={styles.icon} />)}
        </button>
        
        {children}

    </header>
  )
}

export { Header }