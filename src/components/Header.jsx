import React from 'react' //rfce
import styles from './Header.module.css'

import { FaRegSun, FaRegMoon } from "react-icons/fa";

function Header({children, darkMode, setDarkMode}) {
  return (
    <header className={`${styles.Header} ${darkMode && styles.dark}`}>
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABddiw4GEUq76B3fmiI7r6NF-GrWeEf99MjwKrfixFKM4B4o1uuitcgbuBNa3n04L5GSamUi2vex4adduBV-S2XGERxn29-ffvoRv.png?r=a6e" alt="Logo" className={styles.logo}/>
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