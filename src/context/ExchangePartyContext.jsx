import { createContext, useState } from "react"
import PropTypes from "prop-types"

const INITIAL_STATE = {
  people: [],
  partyName: "",
  giftBudget: 0,
  exchangeDate: "",
}

export const ExchangePartyContext = createContext({
  currentParty: INITIAL_STATE,
  makeParty() {},
})

ExchangePartyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function ExchangePartyContextProvider({ children }) {
  const [currentParty, setCurrentParty] = useState(INITIAL_STATE)

  const makeParty = ({ people, partyName, giftBudget = 10, exchangeDate }) => {
    setCurrentParty({ people, partyName, giftBudget, exchangeDate })
  }

  return (
    <ExchangePartyContext.Provider value={{ currentParty, makeParty }}>
      {children}
    </ExchangePartyContext.Provider>
  )
}
