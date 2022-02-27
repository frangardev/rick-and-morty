import React from 'react' //rfce
import styles from './Header.module.css'

import { FaRegSun, FaRegMoon } from "react-icons/fa";

function Header({children, darkMode, setDarkMode}) {
  return (
    <header className={`${styles.Header} ${darkMode && styles.dark}`}>
        <img src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="Logo" className={styles.logo}/>
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