import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const ThemeContext = createContext({
  theme: "light",
  themeToggle() {},
})

const initialDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(initialDark ? "dark" : "light")

  const themeToggle = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }

  document.querySelector("html").className = theme

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
