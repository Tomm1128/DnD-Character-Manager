import React from "react"
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar"

import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Dnd Character Manager</h1>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
