import PropTypes from "prop-types"
import { Input } from "./ui/Input.jsx"
import { SearchIcon } from "lucide-react"

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export function SearchBox({ onSearch, value }) {
  return (
    <Input
      placeholder="Search..."
      icon={<SearchIcon />}
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      name="search"
    />
  )
}
