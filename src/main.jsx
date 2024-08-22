import React from "react"
import { createRoot } from "react-dom/client"
import "./base.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routing/router.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>,
)
