import React from 'react'

function Character() {
    const [characters, setCharacters] = React.useState([])
    
    React.useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

    // console.log(characters);

  return (
    <div className='Characters'>
        {characters.map(character =>(
            <article>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>

            </article>
        ))}
    </div>
  )
}

export { Character }