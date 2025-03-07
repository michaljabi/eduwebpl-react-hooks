import { PageLayout } from "../layouts/PageLayout.jsx"
import { ListItem } from "../components/ui/ListItem.jsx"
import { useState, useEffect } from "react"
import { SearchBox } from "../components/SearchBox.jsx"
import { Outlet, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { peopleService } from "../services/peopleService.js"
import { Notification } from "../components/ui/Notification.jsx"
import { Button } from "../components/ui/Button.jsx"
import { InfoIcon } from "lucide-react"
import { MakeExchangeModalDialog } from "../components/exchange/MakeExchangeModalDialog.jsx"
import { List } from "../components/ui/List.jsx"

PeoplePage.propTypes = {
  noOutlet: PropTypes.bool,
}

export function PeoplePage({ noOutlet = false }) {
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("")
  const [selectedIds, setSelectedIds] = useState([])
  const newExchangeDialogId = "exchangeDialog"

  function handleModalConfirm({ partyName, giftBudget, exchangeDate }) {
    const selectedPeople = people.filter(({ id }) => selectedIds.includes(id))
    navigate("/exchange", {
      state: { people: selectedPeople, partyName, giftBudget, exchangeDate },
    })
  }

  function handleOpenDialog() {
    document.querySelector(`#${newExchangeDialogId}`)?.showModal()
  }

  function handleSelect(id) {
    if (selectedIds.includes(id)) {
      return setSelectedIds(selectedIds.filter((n) => n !== id))
    }
    setSelectedIds([...selectedIds, id])
  }

  useEffect(() => {
    ;(async () => {
      setErrorMessage("")
      setIsLoading(true)
      try {
        const { data } = await peopleService.getPeople()
        setPeople(data)
      } catch (e) {
        console.error(e)
        setErrorMessage(e.message)
        setPeople([])
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  const filteredPeople = people.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase()),
  )
  const isDataReady = !isLoading && !errorMessage

  return (
    <PageLayout title="List of People">
      <div className="flex justify-between gap-4 flex-wrap lg:flex-nowrap mx-10 mt-6">
        <div className=" grow w-full">
          {isLoading && <Notification>Loading people...</Notification>}
          {errorMessage && (
            <Notification type="danger">{errorMessage}</Notification>
          )}
          {isDataReady && (
            <SearchBox
              onSearch={(value) => setSearchText(value)}
              value={searchText}
            />
          )}
          <List>
            {filteredPeople.map(({ id, name, email }) => (
              <ListItem
                key={id}
                isSelected={selectedIds.includes(id)}
                onSelect={() => handleSelect(id)}
                actions={
                  <button
                    className="text-gray-500 hover:text-gray-800 p-2"
                    onClick={() => navigate(`/people/${name}`)}
                  >
                    <InfoIcon />
                  </button>
                }
              >
                {ListItem.makeDefaultItem(name, email)}
              </ListItem>
            ))}
          </List>
          {selectedIds.length > 1 && (
            <div className="fixed right-10 lg:right-20 xl:right-[100px] 2xl:right-[320px] bottom-10">
              <Button size="large" onClick={handleOpenDialog}>
                Start party ({selectedIds.length})
              </Button>
            </div>
          )}
        </div>
        {!noOutlet && (
          <div className="grow w-full">
            <Outlet />
          </div>
        )}
      </div>
      <MakeExchangeModalDialog
        dialogId={newExchangeDialogId}
        onConfirm={handleModalConfirm}
      />
    </PageLayout>
  )
}
