import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchCharacter({search, setSearch}) {
  return (
      <div>

    <input 
        type="text" 
        placeholder="Character"
        value={search} 
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}

export  { SearchCharacter }