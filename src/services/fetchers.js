const data = "http://localhost:3000/playerCharacters/"
const url = "https://www.dnd5eapi.co/api/"

const createCharacter = (newCharacter) => {
  return fetch(data, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCharacter),
  })
}

export { createCharacter }
