import React from 'react'
import styles from './Seach.module.css'

import { FaSearch } from "react-icons/fa";

function SearchCharacter({search, setSearch, darkMode}) {
  return (
      <div className={`${styles.searchContainer} ${darkMode && styles.dark}`}>
      <input 
          className={styles.searchInput}
          type="text" 
          placeholder="Character"
          value={search} 
          onChange={(e)=>{
              setSearch(e.target.value)
          }}
        />
        <FaSearch className={styles.searchIcon}/>
    </div>
  )
}

export  { SearchCharacter }