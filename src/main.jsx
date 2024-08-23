import React from "react"
import { createRoot } from "react-dom/client"
import "./base.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routing/router.jsx"
import { ThemeContextProvider } from "./context/ThemeContext.jsx"
import { ExchangePartyContextProvider } from "./context/ExchangePartyContext.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ExchangePartyContextProvider>
        <RouterProvider router={router} />
      </ExchangePartyContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
