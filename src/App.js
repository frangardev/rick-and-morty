import React from 'react';
import { Header } from './components/Header';
import { Character } from './components/Character';
import { CharacterItem } from './components/CharacterItem';
import { SearchCharacter } from './components/SearchCharacter';
import { Favorites } from './components/Favorites';
import { FavoeitesContainer } from './components/FavoeitesContainer';

function App() {  
  const [state, dispach] = React.useReducer(favoriteReducer, initialState)
    
  React.useEffect(()=>{
      fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => dispach({ type: 'CHARACTERS', payload: data.results }))
  },[])

  React.useEffect(()=>{
    const body = document.querySelector('body') 
    body.className = state.darkMode ? 'dark' : ''
  },[state.darkMode])
  
  const filteredUsers = React.useMemo(() =>
    state.characters.filter((user) => {
      return user.name.toLowerCase().includes(state.search.toLowerCase());
    }),
    [state.characters, state.search]
  )
  
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
  const onSearchCharacter = (value)=> dispach({ type: 'SEARCH_CHARACTER', payload: value })
  const onDarkMode = () => dispach({ type: 'DARK_MODE' })

  return (
    <React.Fragment>
      <Header 
        darkMode={state.darkMode}
        setDarkMode={onDarkMode}
      >
         <SearchCharacter 
          search={state.search}
          setSearch={onSearchCharacter}
        />
      </Header>

      <main>
        {(state.myFavorites.length > 0) &&(
          <FavoeitesContainer>
            {state.myFavorites.map(favorite => (
                <Favorites
                  key={favorite.id}
                  image={favorite.image}
                  name={favorite.name}
                />
            ))}
          </FavoeitesContainer>
        )}
        
        <Character isDark = {state.darkMode}>
          {filteredUsers.map(character => (
            <CharacterItem
              key={character.id}
              character = {character}
              onFavorite = {onFavorite}
            />
          ))}
        </Character>
      </main>
    </React.Fragment>
  );
}

// -----------------------------------------------------------
const isDarkUser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const initialState = {
  characters: [],
  myFavorites: [],
  search: '',
  darkMode: isDarkUser || false,
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
    case 'SEARCH_CHARACTER':
      return{
          ...state,
          search: action.payload
      }
    case 'DARK_MODE':
      return{
          ...state,
          darkMode: !state.darkMode
      }
    default:
        return { ...state }
  }
}

export default App;