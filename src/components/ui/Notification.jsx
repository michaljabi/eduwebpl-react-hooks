import PropTypes from "prop-types"
import classNames from "classnames"

Notification.propTypes = {
  type: PropTypes.oneOf(["info", "danger", "warn"]),
  children: PropTypes.node,
  className: PropTypes.string,
}

export function Notification({ children = "", type = "info", className = "" }) {
  console.log("%cNotification", `color: teal`, "fired")

  return (
    <div
      className={classNames(
        "border rounded text-sm p-4 flex justify-between",
        {
          "bg-blue-50 border-blue-400 text-blue-900": type === "info",
          "bg-red-50 border-red-400 text-red-900 ": type === "danger",
          "bg-orange-100 border-orange-400 text-orange-900 dark:bg-orange-200 dark:border-orange-800":
            type === "warn",
        },
        className,
      )}
    >
      <div>
        <div className="flex items-center gap-1">{children}</div>
      </div>
    </div>
  )
}
