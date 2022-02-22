import React from 'react'
import styles from './Character.module.css'
import { CharacterItem } from './CharacterItem'

function Character({isDark}) {
    const [characters, setCharacters] = React.useState([])

    const [favorites, dispach] = React.useReducer(favoriteReducer, initialState)
    
    React.useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])


    const addFavorite =(favorite)=>{ 
        const isNewFavorite = favorites.favorites.some(item => item.id === favorite.id)

        if(!isNewFavorite || favorites.favorites.length === 0) dispach({ type: 'ADD_FAVORITE',  payload: favorite})
        else console.log(favorite.name,' ya esta en la lista de favoritos');
    }

    console.log(favorites.favorites.map(item=> item))

  return (
    <section className={`${styles.Characters} ${isDark && styles.dark}`}>
        {favorites.favorites.map(favorite => (
            <li key={favorite.id}>
            {favorite.name}
            </li>
        ))}
        {characters.map(character =>(
            <CharacterItem
                character = {character}
                addFavorite = {addFavorite}
                key={character.id}
            />
        ))}
    </section>
  )
}

const initialState = {
    favorites: [],
}

const favoriteReducer=(state, action)=>{
    switch (action.type){
        case 'ADD_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return { ...state }
    }

}

export { Character }