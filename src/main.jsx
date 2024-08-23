import React from "react"
import { createRoot } from "react-dom/client"
import "./base.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routing/router.jsx"
import { ThemeContextProvider } from "./context/ThemeContext.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider
      value={{
        theme: "light",
        themeToggle() {},
      }}
    >
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
)
