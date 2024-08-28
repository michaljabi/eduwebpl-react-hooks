import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Notification } from "../ui/Notification.jsx"
// import { useCounterWithMonster } from "../../hooks/useCounterWithMonster.js"
import { useEffect, useReducer, useRef } from "react"

function reducer(state, action) {
  let isToHigh = state.count >= 5
  switch (action.type) {
    case "increment":
      isToHigh = state.count + 1 >= 5
      return { ...state, count: state.count + 1, isToHigh }
    case "decrement":
      isToHigh = state.count - 1 >= 5
      return { ...state, count: state.count - 1, isToHigh }
    case "reset":
      return { ...state, count: 0, isToHigh: false }
    default:
      throw new Error(`The action ${action.type} does not exist !`)
  }
}

export function Counter() {
  // const { count, message, addOne, minusOne, resetCounter, isToHigh } =
  //   useCounterWithMonster(1)
  let message = ""
  const [counterState, dispatch] = useReducer(reducer, {
    count: 0,
    isToHigh: false,
  })

  const renderCounter = useRef(1)
  useEffect(() => {
    renderCounter.current++
    console.log("I rendered", renderCounter.current, "times")
  })

  const { count, isToHigh } = counterState

  return (
    <div className="rounded p-6 border border-slate-400 text-center">
      <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
        {count}
      </div>
      {message && <Notification>{message}</Notification>}
      <Button
        className="m-2"
        as="secondary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        <MinusIcon color="red" /> minus
      </Button>
      <Button onClick={() => dispatch({ type: "increment" })}>
        <PlusIcon color="lightgreen" /> plus
      </Button>
      {isToHigh && (
        <Button as="secondary" onClick={() => dispatch({ type: "reset" })}>
          <TrashIcon /> reset
        </Button>
      )}
    </div>
  )
}
