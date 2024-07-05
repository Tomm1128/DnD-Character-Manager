import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCharacter } from "../services/fetchers"
import NavBar from "../components/NavBar"

function ViewCharacterPage() {
  const params = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)

  const fetchCharacter = () => {
    getCharacter(params.id).then(setCharacter)
  }

  useEffect(fetchCharacter, [])

  if (!character) {
    return <h1>Loading...</h1>
  }

  const handleClick = () => {
    navigate(`/edit_character/${character.id}`)
  }

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="card mb-4">
          <div className="card-body">
            <h1 className="card-title text-center">{character.name}</h1>
            <h3 className="card-title">Character Details</h3>
            <button className="btn btn-primary" onClick={handleClick}>
              Edit Character
            </button>
            <p>
              <strong>Race:</strong> {character.race}
            </p>
            <p>
              <strong>Class:</strong> {character.class}
            </p>
            <p>
              <strong>Level:</strong> {character.level}
            </p>
            <p>
              <strong>Languages:</strong> {character.languages}
            </p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">Abilities</h3>
            <ul>
              <li>
                <strong>Strength:</strong> {character.strength}
              </li>
              <li>
                <strong>Dexterity:</strong> {character.dexterity}
              </li>
              <li>
                <strong>Constitution:</strong> {character.constitution}
              </li>
              <li>
                <strong>Intelligence:</strong> {character.intelligence}
              </li>
              <li>
                <strong>Wisdom:</strong> {character.wisdom}
              </li>
              <li>
                <strong>Charisma:</strong> {character.charisma}
              </li>
            </ul>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">Role Play Stats</h3>
            <p>
              <strong>Ideals:</strong> {character.ideals}
            </p>
            <p>
              <strong>Bonds:</strong> {character.bonds}
            </p>
            <p>
              <strong>Flaws:</strong> {character.flaws}
            </p>
            <p>
              <strong>Background:</strong> {character.background}
            </p>
            <p>
              <strong>Additional Background Notes:</strong>{" "}
              {character.additionalBackgroundNotes}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCharacterPage
