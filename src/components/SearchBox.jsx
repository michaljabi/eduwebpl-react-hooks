import PropTypes from "prop-types"
import { Input } from "./ui/Input.jsx"
import { SearchIcon, LoaderIcon } from "lucide-react"
import { useEffect, useState, useRef, memo } from "react"
import { useDebounce } from "@uidotdev/usehooks"

export const SearchBox = memo(LocalSearchBox)

LocalSearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
  debounceBy: PropTypes.number,
}

function LocalSearchBox({ onSearch = () => {}, value, debounceBy = 500 }) {
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState(value)

  const inputRef = useRef(null)

  const debouncedSearchTerm = useDebounce(searchText, debounceBy)

  useEffect(() => {
    console.log("SearchBox re-rendered")
  })

  useEffect(() => {
    onSearch(debouncedSearchTerm)
    setIsLoading(false)
  }, [debouncedSearchTerm, onSearch])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <Input
      ref={inputRef}
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
