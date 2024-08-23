import { Button } from "./ui/Button.jsx"
import { MoonIcon, SunIcon } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"

export function ThemeToggler() {
  const { theme, themeToggle } = useContext(ThemeContext)

  return (
    <div className="relative">
      <Button
        className="absolute right-0 top-[-240px] lg:top-[-200px]"
        as="secondary"
        onClick={themeToggle}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  )
}
