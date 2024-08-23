import PropTypes from "prop-types"
import { Input } from "./ui/Input.jsx"
import { SearchIcon, LoaderIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useDebounce } from "@uidotdev/usehooks"

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
  debounceBy: PropTypes.number,
}

export function SearchBox({ onSearch, value, debounceBy = 500 }) {
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState(value)

  const debouncedSearchTerm = useDebounce(searchText, debounceBy)

  useEffect(() => {
    onSearch(debouncedSearchTerm)
    setIsLoading(false)
  }, [debouncedSearchTerm, onSearch])

  return (
    <Input
      placeholder="Search..."
      icon={isLoading ? <LoaderIcon /> : <SearchIcon />}
      value={searchText}
      onChange={(e) => {
        setIsLoading(true)
        setSearchText(e.target.value)
      }}
      name="search"
    />
  )
}
