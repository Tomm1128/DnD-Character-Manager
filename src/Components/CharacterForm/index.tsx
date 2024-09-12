import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { Character } from "../../types"
import {
  checkIfCharacterExists,
  createCharacter,
  updateCharacter,
} from "../../services/fetchers"
import AbilityScoresForm from "./AbilityScoreForm"
import CharacterInfoForm from "./CharacterInfoForm"
import RolePlayForm from "./RolePlayForm"

interface FormData {
  name: string
  heightFeet: string
  heightInches: string
  weight: string
  height: string
  alignment: string
  languages: string[]
  level: string
  race: string
  class: string
  strength: string
  dexterity: string
  constitution: string
  intelligence: string
  wisdom: string
  charisma: string
  ideals: string
  bonds: string
  flaws: string
  inspirationPoints: string
  background: string
  additionalBackgroundNotes: string
  spells: string[]
}

interface CharacterFormProps {
  character?: Character
}

const initialValues: FormData = {
  name: "",
  heightFeet: "",
  heightInches: "",
  height: "",
  weight: "",
  alignment: "",
  languages: [],
  level: "0",
  race: "",
  class: "bard",
  strength: "10",
  dexterity: "10",
  constitution: "10",
  intelligence: "10",
  wisdom: "10",
  charisma: "10",
  ideals: "",
  bonds: "",
  flaws: "",
  inspirationPoints: "0",
  background: "",
  additionalBackgroundNotes: "",
  spells: [],
}

const CharacterForm: React.FC<CharacterFormProps> = ({
  character = initialValues,
}) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: character.name || "",
      heightFeet: character.heightFeet?.toString() || "",
      heightInches: character.heightInches?.toString() || "",
      weight: character.weight || "",
      height: character.height || "",
      alignment: character.alignment || "",
      languages: character.languages || [],
      level: character.level?.toString() || "0",
      race: character.race || "",
      class: character.class || "bard",
      strength: character.strength?.toString() || "10",
      dexterity: character.dexterity?.toString() || "10",
      constitution: character.constitution?.toString() || "10",
      intelligence: character.intelligence?.toString() || "10",
      wisdom: character.wisdom?.toString() || "10",
      charisma: character.charisma?.toString() || "10",
      ideals: character.ideals || "",
      bonds: character.bonds || "",
      flaws: character.flaws || "",
      inspirationPoints: character.inspirationPoints?.toString() || "0",
      background: character.background || "",
      additionalBackgroundNotes: character.additionalBackgroundNotes || "",
      spells: character.spells || [],
    },
  })

  const sanitizeData = (data: FormData): Partial<Character> => {
    const sanitizedData: Partial<Character> = {
      name: data.name,
      heightFeet: Number(data.heightFeet),
      heightInches: Number(data.heightInches),
      weight: data.weight,
      height: `${data.heightFeet} ft ${data.heightInches} in`,
      alignment: data.alignment,
      languages: data.languages,
      level: Number(data.level),
      race: data.race,
      class: data.class,
      strength: Number(data.strength),
      dexterity: Number(data.dexterity),
      constitution: Number(data.constitution),
      intelligence: Number(data.intelligence),
      wisdom: Number(data.wisdom),
      charisma: Number(data.charisma),
      ideals: data.ideals,
      bonds: data.bonds,
      flaws: data.flaws,
      inspirationPoints: Number(data.inspirationPoints),
      background: data.background,
      additionalBackgroundNotes: data.additionalBackgroundNotes,
      spells: data.spells,
    }

    return sanitizedData
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const sanitizedData = sanitizeData(data)

    if (character && "id" in character) {
      const doesCharacterExist = await checkIfCharacterExists(character.id)
      if (doesCharacterExist) {
        await updateCharacter(character.id, sanitizedData)
        alert("Character Updated!")
      } else {
        await createCharacter(sanitizedData)
        alert("Character Created!")
      }
      navigate("/")
    } else {
      await createCharacter(sanitizedData)
      alert("Character Created!")
      navigate("/")
    }
  }

  return (
    <div className="create-character-form container mt-5">
      <h1>Character Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CharacterInfoForm register={register} errors={errors} />
        <AbilityScoresForm register={register} errors={errors} />
        <RolePlayForm register={register} errors={errors} />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CharacterForm
