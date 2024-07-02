import App from "./App"
import CreateCharacterPage from "./pages/CreateCharacterPage"
import SpellsPage from "./pages/SpellsPage"

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
