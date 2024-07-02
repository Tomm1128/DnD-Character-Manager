import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import { getSpells } from "../services/fetchers"
import SpellCard from "../components/SpellCard"

function SpellsPage({}) {
  const [spells, setSpells] = useState([])
  const [classType, setClassType] = useState("cleric")

  useEffect(() => {
    getSpells(classType).then((spellList) => setSpells(spellList.results))
  }, [classType])

  const spellCards = spells.map((spell) => {
    return <SpellCard spell={spell} />
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
            <option value="Barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">{spellCards}</div>
    </div>
  )
}

export default SpellsPage
