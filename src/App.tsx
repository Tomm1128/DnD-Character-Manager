import * as React from "react"

import Home from "./Pages/Home"

import NavBar from "./Components/NavBar"

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  )
}

export default App
