import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "./ui/Button.jsx"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "People", href: "/" },
    { name: "Exchange", href: "/exchange" },
    { name: "Add person", href: "/add-person" },
  ]

  const ctaName = "Laboratory"
  const ctaLink = "/lab"

  return (
    <div className="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
      <div className="relative flex items-center justify-between">
        <ul className="items-center hidden space-x-8 lg:flex">
          {menuItems.map(({ href, name }) => (
            <li key={href}>
              <NavLink
                to={href}
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-white hover:dark:text-deep-purple-400"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Button className="lg:inline-flex hidden" linkTo={ctaLink}>
              {ctaName}
            </Button>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white dark:bg-slate-800 border dark:border-slate-600 rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div></div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {menuItems.map(({ href, name }) => (
                      <li key={href}>
                        <NavLink
                          to={href}
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full h-full border-b border-slate-700 inline-block font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-white  hover:dark:text-deep-purple-400"
                        >
                          {name}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <Button
                        linkTo={ctaLink}
                        className="w-full justify-center mx-0"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {ctaName}
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
