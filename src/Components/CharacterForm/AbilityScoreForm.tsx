import { UseFormRegister, FieldErrors } from "react-hook-form"
import { FormData } from "../../types"

interface AbilityScoreFormProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const AbilityScoresForm: React.FC<AbilityScoreFormProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <h3>Ability Scores</h3>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Strength:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={"10"}
            {...register("strength", { required: "Strength is required" })}
          />
          {errors.strength && <p className="text-danger">{errors.strength.message}</p>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Dexterity:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={"10"}
            {...register("dexterity", { required: "Dexterity is required" })}
          />
          {errors.dexterity && <p className="text-danger">{errors.dexterity.message}</p>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Constitution:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={"10"}
            {...register("constitution", { required: "Constitution is required" })}
          />
          {errors.constitution && <p className="text-danger">{errors.constitution.message}</p>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Intelligence:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={"10"}
            {...register("intelligence", { required: "Intelligence is required" })}
          />
          {errors.intelligence && <p className="text-danger">{errors.intelligence.message}</p>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Wisdom:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={"10"}
            {...register("wisdom", { required: "Wisdom is required" })}
          />
          {errors.wisdom && <p className="text-danger">{errors.wisdom.message}</p>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Charisma:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            placeholder={"10"}
            {...register("charisma", { required: "Charisma is required" })}
          />
          {errors.charisma && <p className="text-danger">{errors.charisma.message}</p>}
        </div>
      </div>
    </>
  );
}

export default AbilityScoresForm;
