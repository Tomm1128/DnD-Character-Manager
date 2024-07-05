import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

function NavBar() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/create_character")
  }

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Dnd Character Manager</span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/spells">
                  Spells
                </NavLink>
              </li>
            </ul>
            <button
              className="btn btn-primary"
              id="create-character-btn"
              onClick={handleClick}
            >
              Create Character
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
