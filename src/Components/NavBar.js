import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dnd Character Manager
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Classes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/spells">
                  Spells
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
