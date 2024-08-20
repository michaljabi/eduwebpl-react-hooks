import { Header } from "./components/Header.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"

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
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default App
