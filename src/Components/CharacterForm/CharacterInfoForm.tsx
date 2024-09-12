import { UseFormRegister, FieldErrors } from "react-hook-form"
import { classes, races } from "../../data/dropDownData"
import { FormData } from "../../types"

interface CharacterInfoFormProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const CharacterInfoForm: React.FC<CharacterInfoFormProps> = ({
  register,
  errors,
}) => {
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
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Height:</label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Feet"
            {...register("heightFeet", { required: "Height feet is required" })}
          />
          {errors.heightFeet && (
            <p className="text-danger">{errors.heightFeet.message}</p>
          )}
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Inches"
            {...register("heightInches", {
              required: "Height inches is required",
            })}
          />
          {errors.heightInches && (
            <p className="text-danger">{errors.heightInches.message}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Weight:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Weight"
            {...register("weight", { required: "Weight is required" })}
          />
          {errors.weight && (
            <p className="text-danger">{errors.weight.message}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Alignment:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="True Neutral"
            {...register("alignment", { required: "Alignment is required" })}
          />
          {errors.alignment && (
            <p className="text-danger">{errors.alignment.message}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Language:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Common"
            {...register("languages", { required: "Language is required" })}
          />
          {errors.languages && (
            <p className="text-danger">{errors.languages.message}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Level:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder="0"
            {...register("level", {
              required: "Level is required",
              valueAsNumber: true,
            })}
          />
          {errors.level && (
            <p className="text-danger">{errors.level.message}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Race:</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            {...register("race", { required: "Race is required" })}
          >
            <option value="">Select Race</option>
            {races.map((race) => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </select>
          {errors.race && <p className="text-danger">{errors.race.message}</p>}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Class:</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            {...register("class", { required: "Class is required" })}
          >
            <option value="">Select Class</option>
            {classes.map((classType) => (
              <option key={classType} value={classType.toLowerCase()}>
                {classType}
              </option>
            ))}
          </select>
          {errors.class && (
            <p className="text-danger">{errors.class.message}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default CharacterInfoForm
