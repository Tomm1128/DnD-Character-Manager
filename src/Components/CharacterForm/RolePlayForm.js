import React, { useEffect, useState } from "react"
import { getSpellsByClass } from "../../services/fetchers"

function RolePlayForm({ formData, updateFormData }) {
  const [spellList, setSpellList] = useState([])

  useEffect(() => {
    getSpellsByClass(formData.class).then(({ results }) =>
      setSpellList(results)
    )
  }, [formData.class])

  const hasSpell = (spellIndex) => {
    return formData.spells.includes(spellIndex)
  }

  return (
    <>
      <h3>Role Play Stats</h3>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Ideals:</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            placeholder="Write your character's Ideals"
            name="ideals"
            value={formData.ideals}
            onChange={updateFormData}
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Bonds:</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            placeholder="Write about your character's Bonds"
            name="bonds"
            value={formData.bonds}
            onChange={updateFormData}
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Flaws:</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            placeholder="Write your character's Flaws"
            name="flaws"
            value={formData.flaws}
            onChange={updateFormData}
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Inspiration Points:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={0}
            name="inspirationPoints"
            value={formData.inspirationPoints}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Background:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Background"
            name="background"
            value={formData.background}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          Additional Background Notes:
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            placeholder="Add more details to your character's background if you would like (optional)"
            name="additionalBackgroundNotes"
            value={formData.additionalBackgroundNotes}
            onChange={updateFormData}
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Spells:</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="spells"
            value={formData.spells}
            onChange={updateFormData}
            multiple
          >
            <option value="">Select Spell</option>
            {spellList.map((spell) => (
              <option key={spell.index} value={spell.index}>
                {spell.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default RolePlayForm
