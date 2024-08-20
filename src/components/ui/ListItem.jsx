import PropTypes from "prop-types"
import classNames from "classnames"

ListItem.propTypes = {
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  onSelect: PropTypes.func,
  children: PropTypes.node,
  actions: PropTypes.node,
}

ListItem.makeDefaultItem = (title = "", subtitle = "", className = "") => {
  return (
    <div className={classNames("mx-3 mr-auto flex flex-col", className)}>
      <span>{title}</span>
      <span className="text-sm font-normal dark:text-gray-600">{subtitle}</span>
    </div>
  )
}

export function ListItem({
  isSelected = false,
  isSelectable = true,
  onSelect = () => {},
  children,
  actions,
}) {
  return (
    <li
      className={classNames(
        "px-6 py-4 flex items-center justify-between md:text-lg lg:text-xl ml-2 text-sm font-medium dark:text-gray-400 text-gray-900",
        { "hover:bg-deep-purple-100 hover:dark:bg-slate-900": isSelectable },
      )}
    >
      {isSelectable ? (
        <label className="flex items-center w-full cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 mr-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
            onClick={onSelect}
            defaultChecked={isSelected}
          />
          {children}
        </label>
      ) : (
        children
      )}
      {actions}
    </li>
  )
}
