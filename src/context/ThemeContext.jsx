import { createContext } from "react"

export const ThemeContext = createContext({
  theme: "light",
  themeToggle() {},
})

export const ThemeContextProvider = ThemeContext.Provider
