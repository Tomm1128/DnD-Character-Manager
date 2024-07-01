import React from "react"
import CharacterInfoForm from "./CharacterInfoForm"

function CreateCharacterForm({ formData, updateFormData }) {
  return (
    <div className="create-character-form container mt-5">
      <h1>Create Character Form</h1>
      <form>
        {
          <CharacterInfoForm
            formData={formData}
            updateFormData={updateFormData}
          />
        }
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
      </form>
    </div>
  )
}

export default CreateCharacterForm
