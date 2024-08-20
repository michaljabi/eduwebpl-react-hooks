import PropTypes from "prop-types"

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export function Header({ title = "Header", subtitle = "subtitle" }) {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="flex flex-col lg:flex-row items-center">
        <svg
          className="w-20 mb-3 md:w-24 lg:w-40 mx-6 dark:fill-gray-200"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M896 296h-37.645c26.373-29.308 42.504-68.29 42.504-111.038 0-12.722-1.43-25.11-4.135-37.014l.213 1.114c-14.02-54.575-57.792-96.11-112.594-106.667l-.907-.145c-6.596-.945-14.214-1.484-21.958-1.484-59.983 0-112.405 32.368-140.752 80.59l-.416.767-108.308 155.82L403.72 122.125c-28.827-48.983-81.285-81.34-141.3-81.34-7.698 0-15.27.533-22.683 1.563l.857-.1c-55.723 10.67-99.51 52.222-113.282 105.813l-.218 1c-2.495 10.795-3.925 23.19-3.925 35.92 0 42.738 16.12 81.71 42.613 111.17l-.134-.152H128c-48.58.052-87.95 39.42-88 87.996V480c.134 39.908 26.86 73.536 63.38 84.1l.62.155V896c.062 48.577 39.424 87.94 87.994 88H832c48.572-.072 87.927-39.427 88-87.992V564.255c37.133-10.728 63.855-44.35 64-84.237V384c-.062-48.575-39.424-87.937-87.994-88H896zM659.688 149.5c20.347-36.45 58.682-60.695 102.68-60.695 4.383 0 8.71.24 12.97.71l-.524-.047c37.125 7.177 66.276 34.907 75.418 70.646l.145.666c.933 6.04 1.466 13.01 1.466 20.102 0 47.768-24.17 89.89-60.947 114.806l-.487.31h-232.5zm-486.063 11.28c9.277-36.41 38.433-64.142 74.957-71.21l.605-.1c3.66-.404 7.907-.634 12.207-.634 44.05 0 82.44 24.223 102.582 60.076l.305.59L466.09 296H233.594c-37.264-25.227-61.434-67.35-61.434-115.118 0-7.093.533-14.06 1.56-20.867l-.094.765zM88 480v-96c.02-22.083 17.917-39.98 39.998-40H488v176H128c-22.083-.02-39.98-17.917-40-39.998V480zm64 416V568h336v368H192c-22.083-.02-39.98-17.917-40-39.998V896zm720 0c-.02 22.083-17.917 39.98-39.998 40H536V568h336zm64-416c-.02 22.083-17.917 39.98-39.998 40H536V344h360c22.083.02 39.98 17.917 40 39.998V384z" />
        </svg>
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5 text-center lg:text-left">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none dark:text-white">
            {title}
          </h2>
          <p className="text-base text-gray-700 dark:text-slate-500">
            {subtitle}
          </p>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3 dark:text-gray-400">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400 dark:text-deep-purple-accent-100"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Select people
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400 dark:text-deep-purple-accent-100"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Shuffle pairs
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400 dark:text-deep-purple-accent-100"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Have the gift exchange party
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
