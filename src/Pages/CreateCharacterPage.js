import React, { useState } from "react"
import NavBar from "../Components/NavBar"
import CreateCharacterForm from "../Components/CreateCharacterForm"

function CreateCharacterPage() {
  return (
    <div className="Create-Character-Page">
      <NavBar />
      <CreateCharacterForm />
    </div>
  )
}

export default CreateCharacterPage
