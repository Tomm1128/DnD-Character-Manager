import React, { useState } from "react"
import CharacterInfoForm from "./CharacterInfoForm"
import AbilityScoresForm from "./AbilityScoreForm"
import RolePlayForm from "./RolePlayForm"
import { createCharacter } from "../../services/fetchers"

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

function CharacterForm() {
  const [formData, setFormData] = useState(initialValues)
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

  const handleSubmit = (event) => {
    event.preventDefault()
    createCharacter(sanitizeData())
  }

  return (
    <div className="create-character-form container mt-5">
      <h1>Create Character Form</h1>
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CharacterForm
