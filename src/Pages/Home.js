import React, { useEffect, useState } from "react"
import { getCharacters } from "../services/fetchers"
import CharacterCards from "../components/CharacterCards"

function Home() {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    getCharacters().then((charactersData) => setCharacters(charactersData))
  }, [])

  if (!characters) {
    return <h1>Loading...</h1>
  }

  const characterCards = characters.map((character) => {
    return <CharacterCards key={character.id} character={character} />
  })

  return (
    <div className="Home">
      {characters.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">{characterCards}</div>
      ) : (
        <h2>No Created DnD Characters</h2>
      )}
    </div>
  )
}

export default Home
