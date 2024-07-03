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

const createCharacter = (newCharacter) => {
  return fetch(data, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCharacter),
  }).then((resp) => resp.json())
}

const updateCharacter = (id, updatedCharacter) => {
  return fetch(data + id, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...updatedCharacter }),
  }).then((resp) => resp.json())
}

const checkIfCharacterExists = (id) => {
  return getCharacter(id).then((resp) => {
    if (resp.ok) {
      return true
    } else if (Response.status === 404) {
      return false
    }
  })
}

export {
  getAllCharacters,
  getCharacter,
  createCharacter,
  getSpellsByClass,
  getSpellData,
  checkIfCharacterExists,
  updateCharacter,
}
