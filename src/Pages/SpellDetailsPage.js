import React, { useEffect, useState } from "react"
import { getSpellData } from "../services/fetchers"
import { useParams } from "react-router-dom"

function SpellDetailsPage() {
  const params = useParams()
  const [spellData, setSpellData] = useState([])

  useEffect(() => {
    getSpellData(params.index).then((spellDetails) =>
      setSpellData(spellDetails)
    )
  }, [])

  console.log(spellData)

  return (
    <div className="col-lg-4 mb-4">
      <div className="card mx-auto" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">Testing</h5>
          <h6 className="card-subtitle mb-2 text-muted">Testing</h6>
          <a href="#" className="card-link">
            View Spell
          </a>
        </div>
      </div>
    </div>
  )
}

export default SpellDetailsPage
