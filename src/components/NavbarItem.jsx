import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import classNames from "classnames"

NavbarItem.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export function NavbarItem({ href, name }) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames("navbar-item", { "is-active": isActive })
      }
      to={href}
    >
      {name}
    </NavLink>
  )
}
