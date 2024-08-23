import { PageLayout } from "../layouts/PageLayout.jsx"
import { Link } from "react-router-dom"
import { makeExchange } from "../make-exchange.js"
import { ListItem } from "../components/ui/ListItem.jsx"
import { CalendarCheckIcon, GiftIcon, WalletIcon } from "lucide-react"
import { Notification } from "../components/ui/Notification.jsx"
import { List } from "../components/ui/List.jsx"
import { useContext } from "react"
import { ExchangePartyContext } from "../context/ExchangePartyContext.jsx"

export function ExchangePage() {
  const { currentParty } = useContext(ExchangePartyContext)
  const pairs = makeExchange(currentParty?.people || [])
  const isPartyStarted = pairs.length > 1
  const { partyName, giftBudget, exchangeDate } = currentParty || {}

  return (
    <PageLayout title="Exchange of gifts">
      {!isPartyStarted ? (
        <Notification className="my-6 mx-6 lg:w-1/2 lg:mx-auto">
          Please select
          <Link className="underline" to="/">
            people
          </Link>
          first
        </Notification>
      ) : (
        <div className="dark:bg-slate-900 bg-gray-300 p-3 m-3 mt-6 rounded">
          <h3 className="text-xl text-center my-4">
            {partyName || "The Exchange Party"}
          </h3>
          <h4 className="dark:text-slate-500 text-gray-800 text-normal flex gap-2 items-center mb-2">
            <WalletIcon size={20} /> gifts up to <strong>${giftBudget}</strong>
          </h4>
          <h4 className="dark:text-slate-500 text-gray-800 text-normal flex gap-2 items-center">
            <CalendarCheckIcon size={20} /> exchange date:{" "}
            <strong>{exchangeDate}</strong>
          </h4>
        </div>
      )}
      <List>
        {pairs.map(([person, forPerson]) => (
          <ListItem key={person.id} isSelectable={false}>
            <div className="flex justify-between w-full items-center">
              {ListItem.makeDefaultItem(
                person.name,
                person.email,
                "w-full ml-0 md:ml-6",
              )}
              <div className="flex space-x-3 mx-auto text-nowrap items-center">
                <span className="text-sm font-normal hidden md:inline-flex">
                  buys
                </span>
                <span
                  className="text-deep-purple-300 dark:text-deep-purple-100"
                  title="Buys gift for"
                >
                  <GiftIcon size={30} />
                </span>
                <span className="text-sm font-normal hidden md:inline-flex">
                  for
                </span>
              </div>
              {ListItem.makeDefaultItem(
                forPerson.name,
                forPerson.email,
                "w-full text-right mr-3 md:mr-6",
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </PageLayout>
  )
}
