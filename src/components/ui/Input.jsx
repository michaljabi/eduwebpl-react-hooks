import PropTypes from "prop-types"
import classNames from "classnames"

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.element,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  help: PropTypes.string,
}

export function Input({
  name,
  icon,
  onChange = () => {},
  onBlur = () => {},
  value = "",
  placeholder = "",
  type = "text",
  label = "",
  error = "",
  help = "",
}) {
  const hasErrorText = Boolean(error)
  const hasHelpText = Boolean(help)

  return (
    <div className="mt-5 mb-3">
      {label && (
        <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
          {label}
        </label>
      )}
      <div
        className={classNames("w-full inline-flex bg-gray-100 rounded border", {
          "border-deep-purple-400  dark:bg-slate-700": !hasErrorText,
          "border-red-900 bg-red-100 dark:bg-red-200": hasErrorText,
        })}
      >
        {icon && (
          <div className="inline bg-gray-200 py-2 px-4 text-gray-600 dark:bg-slate-800 rounded-l">
            {icon}
          </div>
        )}
        <input
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          className={classNames(
            "w-full bg-transparent border-transparent py-1 px-4",
            {
              "text-gray-950  dark:text-gray-100": !hasErrorText,
              "text-red-950  dark:text-gray-900 placeholder-gray-700":
                hasErrorText,
            },
          )}
          value={value}
        />
      </div>
      {hasErrorText && (
        <div className="flex items-center mt-1 text-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-1 text-xs">{error}</p>
        </div>
      )}
      {hasHelpText && <p className="text-xs text-gray-500 mt-1">{help}</p>}
    </div>
  )
}
