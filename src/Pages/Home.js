import React, { useEffect, useState } from "react"

import CharacterCards from "../Components/CharacterCards"
import { getAllCharacters } from "../services/fetchers"

function Home() {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    getAllCharacters().then((charactersData) => setCharacters(charactersData))
  }, [])

  if (!characters) {
    return <h1>Loading...</h1>
  }

  const characterCards = characters.map((character) => {
    return <CharacterCards key={character.id} character={character} />
  })

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Dnd Character Manager</h1>
        <h4>
          Here you can create and manage your created characters for your DnD
          campaigns. Here are the features we offer:
        </h4>
        <ul>
          <li>Create and Edit Characters</li>
          <li>Explore the large database of spells in Dnd 5e</li>
        </ul>
      </div>
      <div className="character-section">
        <h2>DnD Character's</h2>
        {characters.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {characterCards}
          </div>
        ) : (
          <div>
            <h3>No Created DnD Characters</h3>
            <h3>Create One by Clicking the Create Character Button Above</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
