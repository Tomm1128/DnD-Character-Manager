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
      <h1>Home</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">{characterCards}</div>
    </div>
  )
}

export default Home
