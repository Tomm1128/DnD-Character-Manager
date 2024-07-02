import React, { useState } from "react"
import CharacterInfoForm from "./CharacterInfoForm"
import AbilityScoresForm from "./AbilityScoreForm"
import RolePlayForm from "./RolePlayForm"

const initialValues = {
  name: "",
  height: "",
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

function CreateCharacterForm() {
  const [formData, setFormData] = useState(initialValues)
  const updateFormData = ({ target }) => {
    const newData = {
      ...formData,
      [target.name]: target.value,
    }

    setFormData(newData)
  }

  return (
    <div className="create-character-form container mt-5">
      <h1>Create Character Form</h1>
      <form>
        {
          <CharacterInfoForm
            formData={formData}
            updateFormData={updateFormData}
          />
        }
        {
          <AbilityScoresForm
            formData={formData}
            updateFormData={updateFormData}
          />
        }
        {<RolePlayForm formData={formData} updateFormData={updateFormData} />}
      </form>
    </div>
  )
}

export default CreateCharacterForm
