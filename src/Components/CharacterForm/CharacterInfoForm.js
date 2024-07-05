import React from "react"
import { classes, races } from "../../data/dropDownData"

function CharacterInfoForm({ formData, updateFormData }) {
  return (
    <>
      <h3>Character Information</h3>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Name:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Height:</label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Feet"
            name="heightFeet"
            value={formData.heightFeet}
            onChange={updateFormData}
          />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Inches"
            name="heightInches"
            value={formData.heightInches}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Weight:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Weight"
            name="weight"
            value={formData.weight}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Alignment:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="True Neutral"
            name="alignment"
            value={formData.alignment}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Language:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Common"
            name="languages"
            value={formData.languages}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Level:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder="{0}"
            name="level"
            value={formData.level}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Race:</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="race"
            value={formData.race}
            onChange={updateFormData}
          >
            <option value="">Select Race</option>
            {races.map((race) => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Class:</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="class"
            value={formData.class}
            onChange={updateFormData}
          >
            <option value="">Select Class</option>
            {classes.map((classType) => (
              <option key={classType} value={classType}>
                {classType}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default CharacterInfoForm
