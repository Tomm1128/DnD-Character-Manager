import { Link } from "react-router-dom"
import Character from "../types/character"

function CharacterCards({ character }: {character: Character}) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card mx-auto" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {character.race + " " + character.class + " Lv: " + character.level}
          </h6>
          <Link to={`/view_character/${character.id}`}>View Character</Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterCards
