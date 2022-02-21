import React from 'react' //rfce

function Header() {
    const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className='Header'>
        <h1>React Hooks</h1>
        <button
            type='button'
            onClick={()=> setDarkMode(!darkMode) }
        >
            {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
        <br />
    </div>
  )
}

export { Header }

