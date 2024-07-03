import React, { useState, useEffect } from "react"

import NavBar from "../components/NavBar"
import SpellCard from "../components/SpellCard"
import { getSpellsByClass } from "../services/fetchers"
import { spellCastorClasses } from "../data/dropDownData"

function SpellsPage({}) {
  const [spells, setSpells] = useState([])
  const [classType, setClassType] = useState("bard")

  useEffect(() => {
    getSpellsByClass(classType).then((spellList) =>
      setSpells(spellList.results)
    )
  }, [classType])

  const spellCards = spells.map((spell) => {
    return <SpellCard key={spell.name} spell={spell} />
  })

  return (
    <div className="App">
      <NavBar />
      <h1>Spells</h1>
      <div className="form-group row">
        <label className="col-sm-1 col-form-label">Class:</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="class"
            value={classType}
            onChange={({ target }) => setClassType(target.value)}
          >
            <option value="">Select Class</option>
            {spellCastorClasses.map((castor) => (
              <option key={castor} value={castor.toLowerCase()}>
                {castor}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">{spellCards}</div>
    </div>
  )
}

export default SpellsPage
