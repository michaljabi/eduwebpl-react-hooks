import { createContext, useState } from "react"
import PropTypes from "prop-types"
import { makeExchange } from "./make-exchange.js"

const INITIAL_STATE = {
  people: [],
  partyName: "",
  giftBudget: 0,
  exchangeDate: "",
}

export const ExchangePartyContext = createContext({
  currentParty: INITIAL_STATE,
  isPartyStarted: false,
  pairs: [],
  shufflePairs() {},
  makeParty() {},
})

ExchangePartyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function ExchangePartyContextProvider({ children }) {
  const [currentParty, setCurrentParty] = useState(INITIAL_STATE)
  const [pairs, setPairs] = useState([]) // [ [{p1}, {p2}], [{p2}, {p1}] ]

  const isPartyStarted = pairs.length > 1

  const makeParty = ({ people, partyName, giftBudget = 10, exchangeDate }) => {
    setPairs(makeExchange(people))
    setCurrentParty({ people, partyName, giftBudget, exchangeDate })
  }

  const shufflePairs = () => {
    setPairs(makeExchange(currentParty.people))
  }

  return (
    <ExchangePartyContext.Provider
      value={{ currentParty, makeParty, shufflePairs, isPartyStarted, pairs }}
    >
      {children}
    </ExchangePartyContext.Provider>
  )
}
