import App from "./App"
import CreateCharacterPage from "./pages/CreateCharacterPage"
import SpellDetailsPage from "./pages/SpellDetailsPage"
import SpellsPage from "./pages/SpellsPage"
import ViewCharacterPage from "./pages/ViewCharacterPage"

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
  {
    path: "/spells/:index",
    element: <SpellDetailsPage />,
  },
  {
    path: "/view_character/:id",
    element: <ViewCharacterPage />,
  },
]

export default routes
