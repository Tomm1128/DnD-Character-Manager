import { useEffect, useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form"
import { getSpellsByClass } from "../../services/fetchers";
import { FormData, Spell } from "../../types"

interface AbilityScoreFormProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const RolePlayForm: React.FC<AbilityScoreFormProps> = ({
  register,
  errors,
}) => {
  const [spellList, setSpellList] = useState<Spell[]>([])

  useEffect(() => {
    getSpellsByClass(register("class")).then(({ results }) =>
      setSpellList(results)
    );
  }, [register("class"), register]);

  return (
    <>
      <h3>Role Play Stats</h3>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Ideals:</label>
        <div className="col-sm-10">
          <textarea
            className={`form-control ${errors.ideals ? 'is-invalid' : ''}`}
            placeholder="Write your character's Ideals"
            {...register("ideals", { required: "Ideals are required." })}
          ></textarea>
          {errors.ideals && <span className="text-danger">{errors.ideals.message}</span>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Bonds:</label>
        <div className="col-sm-10">
          <textarea
            className={`form-control ${errors.bonds ? 'is-invalid' : ''}`}
            placeholder="Write about your character's Bonds"
            {...register("bonds", { required: "Bonds are required." })}
          ></textarea>
          {errors.bonds && <span className="text-danger">{errors.bonds.message}</span>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Flaws:</label>
        <div className="col-sm-10">
          <textarea
            className={`form-control ${errors.flaws ? 'is-invalid' : ''}`}
            placeholder="Write your character's Flaws"
            {...register("flaws", { required: "Flaws are required." })}
          ></textarea>
          {errors.flaws && <span className="text-danger">{errors.flaws.message}</span>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Inspiration Points:</label>
        <div className="col-sm-10">
          <input
            type="number"
            className={`form-control ${errors.inspirationPoints ? 'is-invalid' : ''}`}
            placeholder={"0"}
            {...register("inspirationPoints", { required: "Inspiration Points are required.", min: 0 })}
          />
          {errors.inspirationPoints && <span className="text-danger">{errors.inspirationPoints.message}</span>}
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Background:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className={`form-control ${errors.background ? 'is-invalid' : ''}`}
            placeholder="Background"
            {...register("background", { required: "Background is required." })}
          />
          {errors.background && <span className="text-danger">{errors.background.message}</span>}
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
            {...register("additionalBackgroundNotes")}
          ></textarea>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Spells:</label>
        <div className="col-sm-10">
          <select
            className={`form-control ${errors.spells ? 'is-invalid' : ''}`}
            {...register("spells")}
            multiple
          >
            <option value="">Select Spell</option>
            {spellList.map((spell) => (
              <option key={spell.index} value={spell.index}>
                {spell.name}
              </option>
            ))}
          </select>
          {errors.spells && <span className="text-danger">{errors.spells.message}</span>}
        </div>
      </div>
    </>
  );
}

export default RolePlayForm;
