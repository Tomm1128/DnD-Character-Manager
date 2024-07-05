import React, { useState } from "react"
import CharacterInfoForm from "./CharacterInfoForm"
import AbilityScoresForm from "./AbilityScoreForm"
import RolePlayForm from "./RolePlayForm"
import {
  checkIfCharacterExists,
  createCharacter,
  updateCharacter,
} from "../../services/fetchers"
import { useNavigate } from "react-router-dom"

const initialValues = {
  name: "",
  heightFeet: "",
  heightInches: "",
  weight: "",
  alignment: "",
  languages: [],
  level: 0,
  race: "",
  class: "",
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  ideals: "",
  bonds: "",
  flaws: "",
  inspirationPoints: 0,
  background: "",
  additionalBackgroundNotes: "",
}

function CharacterForm({ character = initialValues }) {
  const [formData, setFormData] = useState(character)
  const navigate = useNavigate()
  const updateFormData = ({ target }) => {
    const newData = {
      ...formData,
      [target.name]: target.value,
    }

    setFormData(newData)
  }

  const sanitizeData = () => {
    const sanitizedData = { ...formData }

    const numericFields = [
      "heightFeet",
      "heightInches",
      "level",
      "strength",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "charisma",
      "inspirationPoints",
    ]

    numericFields.forEach((field) => {
      sanitizedData[field] = Number(sanitizedData[field])
    })

    sanitizedData.height = `${sanitizedData.heightFeet} ft ${sanitizedData.heightInches} in`

    sanitizedData.weight = `${sanitizedData.weight} lbs`

    delete sanitizedData.heightFeet
    delete sanitizedData.heightInches

    return sanitizedData
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const doesCharacterExist = await checkIfCharacterExists(character.id)
    if (doesCharacterExist) {
      updateCharacter(character.id, sanitizeData())
        .then(alert("Character Updated!"))
        .then(() => navigate("/"))
    } else {
      createCharacter(sanitizeData())
        .then(() => setFormData(initialValues))
        .then(alert("Character Created!"))
        .then(() => navigate("/"))
    }
  }

  return (
    <div className="create-character-form container mt-5">
      <h1>Character Form</h1>
      <form onSubmit={handleSubmit}>
        <CharacterInfoForm
          formData={formData}
          updateFormData={updateFormData}
        />
        <AbilityScoresForm
          formData={formData}
          updateFormData={updateFormData}
        />
        <RolePlayForm formData={formData} updateFormData={updateFormData} />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CharacterForm
