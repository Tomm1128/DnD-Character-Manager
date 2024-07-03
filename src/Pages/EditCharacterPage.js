import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import CharacterForm from "../components/CharacterForm"
import { useParams } from "react-router-dom"
import { getCharacter } from "../services/fetchers"

function EditCharacterPage() {
  const params = useParams()
  const [character, setCharacter] = useState(null)

  const fetchCharacter = () => {
    getCharacter(params.id).then(setCharacter)
  }

  useEffect(fetchCharacter, [])

  if (!character) {
    return <h1>Loading...</h1>
  }

  const setUpCharacterForEdit = () => {
    const toBeEditedCharacter = { ...character }
    const [feetPart, inchesPart] = toBeEditedCharacter.height.split(" ft ")
    toBeEditedCharacter.weight = toBeEditedCharacter.weight.split(" lbs ")[0]
    toBeEditedCharacter.heightFeet = parseInt(feetPart, 10)
    toBeEditedCharacter.heightInches = parseInt(inchesPart.split(" in")[0], 10)
    delete toBeEditedCharacter.height
    return toBeEditedCharacter
  }

  return (
    <div className="Create-Character-Page">
      <NavBar />
      <CharacterForm character={setUpCharacterForEdit()} />
    </div>
  )
}

export default EditCharacterPage
