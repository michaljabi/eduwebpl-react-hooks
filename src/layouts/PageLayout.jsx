import PropTypes from "prop-types"

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export function PageLayout({ title = "Empty page", children }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {children}
    </>
  )
}
