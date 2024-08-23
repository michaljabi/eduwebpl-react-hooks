import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import { PeoplePage } from "../pages/PeoplePage.jsx"
import { ExchangePage } from "../pages/ExchangePage.jsx"
import { PersonInfoPage } from "../pages/PersonInfoPage.jsx"
import { AddPersonPage } from "../pages/AddPersonPage.jsx"
import { NotFoundPage } from "../pages/NotFoundPage.jsx"
import { LaboratoryPage } from "../pages/LaboratoryPage.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PeoplePage noOutlet />,
      },
      {
        path: "people",
        element: <PeoplePage />,
        children: [
          {
            path: ":personId",
            element: <PersonInfoPage />,
          },
        ],
      },
      {
        path: "exchange",
        element: <ExchangePage />,
      },
      {
        path: "add-person",
        element: <AddPersonPage />,
      },
      {
        path: "lab",
        element: <LaboratoryPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])
