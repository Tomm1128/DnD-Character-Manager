import React from "react"

function AbilityScoresForm({ formData, updateFormData }) {
  return (
    <>
      <h3>Ability Scores</h3>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Strength:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={10}
            name="strength"
            value={formData.strength}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Dexterity:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={10}
            name="dexterity"
            value={formData.dexterity}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Constitution:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={10}
            name="constitution"
            value={formData.constitution}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Intelligence:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={10}
            name="intelligence"
            value={formData.intelligence}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Wisdom:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={10}
            name="wisdom"
            value={formData.wisdom}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Charisma:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={10}
            name="charisma"
            value={formData.charisma}
            onChange={updateFormData}
          />
        </div>
      </div>
    </>
  )
}

export default AbilityScoresForm
