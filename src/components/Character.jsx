import React from 'react'
import styles from './Character.module.css'
import { CharacterItem } from './CharacterItem'

function Character({isDark}) {
    const [state, dispach] = React.useReducer(favoriteReducer, initialState)
    
    React.useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => dispach({ type: 'CHARACTERS', payload: data.results }))
    },[])


    const onFavorite = (favorite) => { 
        const newFavorites = [...state.myFavorites]
        const isNewFavorite = newFavorites.some(item => item.id === favorite.id)

        if(!isNewFavorite || newFavorites.length === 0) {
            newFavorites.push(favorite)
        }else{
            const value = newFavorites.findIndex(item => item === favorite)
            newFavorites.splice(value, 1)
        } 
        dispach({ type: 'NEW_FAVORITE', payload: newFavorites })
    }

  return (
    <section className={`${styles.Characters} ${isDark && styles.dark}`}>
        {state.myFavorites.map(favorite => (
            <li key={favorite.id}>
            {favorite.name}
            </li>
        ))}
        {state.characters.map(character =>(
            <CharacterItem
                character = {character}
                onFavorite = {onFavorite}
                key={character.id}
            />
        ))}
    </section>
  )
}

const initialState = {
    characters: [],
    myFavorites: [],
}

const favoriteReducer=(state, action)=>{
    switch (action.type){
        case 'NEW_FAVORITE':
            return{
                ...state,
                myFavorites: action.payload
            }
        case 'CHARACTERS':
            return{
                ...state,
                characters: action.payload
            }
        default:
            return { ...state }
    }

}

export { Character }