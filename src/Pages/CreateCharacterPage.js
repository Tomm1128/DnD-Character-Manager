import React from "react"
import NavBar from "../components/NavBar"
import CreateCharacterForm from "../components/CreateCharacterForm"

function CreateCharacterPage() {
  return (
    <div className="Create-Character-Page">
      <NavBar />
      <CreateCharacterForm />
    </div>
  )
}

export default CreateCharacterPage
