import React from "react"
import { Link } from "react-router-dom"

function SpellCard({ spell }) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card mx-auto" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">{spell.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {"Spell Level: " + spell.level}
          </h6>
          <p>
            <Link to={`/spells/${spell.index}`}>View Spell</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpellCard
