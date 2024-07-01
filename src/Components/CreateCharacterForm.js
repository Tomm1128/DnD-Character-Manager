import React from "react"

function CreateCharacterForm() {
  return (
    <div className="create-character-form container mt-5">
      <h1>Create Character Form</h1>
      <form>
        <h3>Character Information</h3>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Height:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Height" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Weight:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Weight" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Alignment:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="True Neutral"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Languages:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Common" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Level:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={0} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Race:</label>
          <div className="col-sm-10">
            <select className="form-control">
              <option>Select Race</option>
              <option>Dwarf</option>
              <option>Elf</option>
              <option>Halfling</option>
              <option>Human</option>
              <option>Dragonborn</option>
              <option>Gnome</option>
              <option>Half-Elf</option>
              <option>Half-Orc</option>
              <option>Tiefling</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Class:</label>
          <div className="col-sm-10">
            <select className="form-control">
              <option>Select Class</option>
              <option>Barbarian</option>
              <option>Bard</option>
              <option>Cleric</option>
              <option>Druid</option>
              <option>Fighter</option>
              <option>Monk</option>
              <option>Paladin</option>
              <option>Ranger</option>
              <option>Rogue</option>
              <option>Sorcerer</option>
              <option>Warlock</option>
              <option>Wizard</option>
            </select>
          </div>
        </div>
        <h3>Ability Scores</h3>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Strength:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={10} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Dexterity:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={10} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Constitution:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={10} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Intelligence:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={10} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Wisdom:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={10} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Charisma:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={10} />
          </div>
        </div>
        <h3>Role Play Stats</h3>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Ideals:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Ideals" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Bonds:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Bonds" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Flaws:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Flaws" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Inspiration Points:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" placeholder={0} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Background:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Background"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCharacterForm
