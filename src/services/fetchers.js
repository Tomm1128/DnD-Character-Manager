const data = "http://localhost:3000/playerCharacters/"
const url = "https://www.dnd5eapi.co/api/"

const getAllCharacters = () => {
  return fetch(data).then((resp) => resp.json())
}

const getCharacter = (id) => {
  return fetch(data + id).then((resp) => resp.json())
}

const getSpellsByClass = (classType) => {
  return fetch(url + "classes/" + classType + "/spells").then((resp) =>
    resp.json()
  )
}

const getSpellData = (spellName) => {
  return fetch(url + "spells/" + spellName).then((resp) => resp.json())
}

const createId = async () => {
  const currentCharacters = await getAllCharacters()
  if (currentCharacters.length === 0) {
    return "1"
  } else {
    const lastEntry = currentCharacters[currentCharacters.length - 1]
    const newId = parseInt(lastEntry.id, 10) + 1

    return newId.toString()
  }
}

const createCharacter = async (newCharacter) => {
  const newId = await createId()

  return fetch(data, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: newId, ...newCharacter }),
  }).then((resp) => resp.json())
}

export {
  getAllCharacters,
  getCharacter,
  createCharacter,
  getSpellsByClass,
  getSpellData,
}
