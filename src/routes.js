import App from "./App"
import CreateCharacterPage from "./Pages/CreateCharacterPage"
import SpellsPage from "./Pages/SpellsPage"

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create_character",
    element: <CreateCharacterPage />,
  },
  {
    path: "/spells",
    element: <SpellsPage />,
  },
]

export default routes
