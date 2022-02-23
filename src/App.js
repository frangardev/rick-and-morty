import React from 'react';
import { Header } from './components/Header';
import { Character } from './components/Character';
import { CharacterItem } from './components/CharacterItem';

//Con esto sabemos si el usuario usa darkMode o lighMode
const isDarkUser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

function App() {  
  const [darkMode, setDarkMode] = React.useState(isDarkUser)
  const [state, dispach] = React.useReducer(favoriteReducer, initialState)
    
  React.useEffect(()=>{
      fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => dispach({ type: 'CHARACTERS', payload: data.results }))
  },[])

  React.useEffect(()=>{
    const body = document.querySelector('body') 
    body.className = darkMode ? 'dark' : ''
  },[darkMode])

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
    <React.Fragment>
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {state.myFavorites.map(favorite => (
          <li key={favorite.id}>
          {favorite.name}
          </li>
      ))}

      <Character isDark = {darkMode}>
        {state.characters.map(character => (
          <CharacterItem
            key={character.id}
            character = {character}
            onFavorite = {onFavorite}
          />
        ))}
      </Character>
    </React.Fragment>
  );
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

export default App;
