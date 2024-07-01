import React from "react"
import NavBar from "../Components/NavBar"
import CreateCharacterForm from "../Components/CreateCharacterForm"

function CreateCharacterPage() {
  return (
    <div className="Create-Character-page">
      <NavBar />
      <h1>Character Creation Page</h1>
      <CreateCharacterForm />
    </div>
  )
}

export default CreateCharacterPage
