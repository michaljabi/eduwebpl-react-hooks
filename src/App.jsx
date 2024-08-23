import { Header } from "./components/Header.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { Button } from "./components/ui/Button.jsx"
import { MoonIcon, SunIcon } from "lucide-react"

/**
 * Tailwind inspired by:
 *
 * https://tailwindtemplates.io/templates?theme=lexicon
 * https://kitwind.io/products/kometa
 * https://tailgrids.com/components
 * */

function App() {
  return (
    <>
      <Header
        title="Secret Gift Giver"
        subtitle="Exchange gifts with your colleagues"
      />
      <main className="container p-4 mx-auto">
        <div className="relative">
          <Button
            className="absolute right-0 top-[-240px] lg:top-[-200px]"
            as="secondary"
          >
            <SunIcon /> <MoonIcon />
          </Button>
        </div>
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default App
