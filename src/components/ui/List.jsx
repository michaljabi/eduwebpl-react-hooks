import PropTypes from "prop-types"

List.propTypes = {
  children: PropTypes.node,
}

export function List({ children }) {
  return (
    <ul
      role="list"
      className="shadow divide-y divide-gray-200 dark:divide-gray-700"
    >
      {children}
    </ul>
  )
}
