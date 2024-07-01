import React, { useState } from "react"
import NavBar from "../Components/NavBar"
import CreateCharacterForm from "../Components/CreateCharacterForm"

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

function CreateCharacterPage() {
  const [formData, setFormData] = useState(initialValues)

  const updateFormData = ({ target }) => {
    const newData = {
      ...formData,
      [target.name]: target.value,
    }

    setFormData(newData)
  }

  console.log(formData)

  return (
    <div className="Create-Character-page">
      <NavBar />
      <CreateCharacterForm
        formData={formData}
        updateFormData={updateFormData}
      />
    </div>
  )
}

export default CreateCharacterPage
