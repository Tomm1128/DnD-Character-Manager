import React from "react"

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
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Height"
            name="height"
            value={formData.height}
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
        <label className="col-sm-2 col-form-label">Languages:</label>
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
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Halfling">Halfling</option>
            <option value="Human">Human</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Gnome">Gnome</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Half-Orc">Half-Orc</option>
            <option value="Tiefling">Tiefling</option>
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
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default CharacterInfoForm
