import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "react-router-dom"

Button.propTypes = {
  as: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
}

export function Button({
  as = "primary",
  size = "normal",
  linkTo,
  onClick = () => {},
  children,
  className = "",
  type = "button",
}) {
  const RenderButton = linkTo ? Link : "button"

  //console.log("%cButton", `color: teal`, "fired")

  return (
    <RenderButton
      to={linkTo}
      onClick={onClick}
      className={classNames(
        "tracking-wide transition duration-200 rounded disabled:opacity-50 m-1 inline-flex gap-2 items-center",
        {
          "py-1 px-2 text-sm": size === "small",
          "py-2 px-4": size === "normal",
          "py-4 px-6 text-xl": size === "large",
          "text-slate-100 bg-deep-purple-500 hover:bg-deep-purple-600 active:bg-deep-purple-700":
            as === "primary",
          "text-slate-950 hover:bg-gray-100 active:bg-gray-200 border border-gray-400 dark:text-slate-100 dark:hover:bg-slate-600 dark:active:bg-slate-700":
            as === "secondary",
        },
        className,
      )}
      type={type}
    >
      {children}
    </RenderButton>
  )
}
