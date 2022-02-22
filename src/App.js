import React from 'react';
import { Header } from './components/Header';
import { Character } from './components/Character';

//Con esto sabemos si el usuario usa darkMode o lighMode
const isDarkUser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

function App() {  
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(()=>{
    const body = document.querySelector('body')
    
    body.className = darkMode ? 'dark' : ''
  },[darkMode])

  return (
    <React.Fragment>
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Character 
        isDark = {darkMode}
      />
    </React.Fragment>
  );
}

export default App;
