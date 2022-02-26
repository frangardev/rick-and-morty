import React from 'react'

import { FaSearch } from "react-icons/fa";

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
        <FaSearch />
    </div>
  )
}

export  { SearchCharacter }