import App from "./App"
import CreateCharacterPage from "./Pages/CreateCharacterPage"
import EditCharacterPage from "./Pages/EditCharacterPage"
import SpellDetailsPage from "./Pages/SpellDetailsPage"
import SpellsPage from "./Pages/SpellsPage"
import ViewCharacterPage from "./Pages/ViewCharacterPage"

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
  {
    path: "/edit_character/:id",
    element: <EditCharacterPage />,
  },
]

export default routes
