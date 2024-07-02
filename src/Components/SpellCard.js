import React from "react"

function CharacterCards({ character }) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card mx-auto" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {character.race + " " + character.class + " Lv: " + character.level}
          </h6>
          <p className="card-text">{character.additionalBackgroundNotes}</p>
          <a href="#" className="card-link">
            View Character
          </a>
        </div>
      </div>
    </div>
  )
}

export default CharacterCards
