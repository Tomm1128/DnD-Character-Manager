import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CharacterForm from "../Components/CharacterForm"
import { getCharacter } from "../services/fetchers"
import NavBar from "../Components/NavBar"

function EditCharacterPage() {
  const params = useParams()
  const [character, setCharacter] = useState(null)

  const fetchCharacter = () => {
    getCharacter(params.id).then(setCharacter)
  }

  useEffect(fetchCharacter, [params.id])

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
