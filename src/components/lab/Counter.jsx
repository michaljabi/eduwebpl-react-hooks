import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Notification } from "../ui/Notification.jsx"
import { useCounterWithMonster } from "../../hooks/useCounterWithMonster.js"

export function Counter() {
  const { count, message, addOne, minusOne, resetCounter, isToHigh } =
    useCounterWithMonster(1)

  return (
    <div className="rounded p-6 border border-slate-400 text-center">
      <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
        {count}
      </div>
      {message && <Notification>{message}</Notification>}
      <Button className="m-2" as="secondary" onClick={minusOne}>
        <MinusIcon color="red" /> minus
      </Button>
      <Button onClick={addOne}>
        <PlusIcon color="lightgreen" /> plus
      </Button>
      {isToHigh && (
        <Button as="secondary" onClick={resetCounter}>
          <TrashIcon /> reset
        </Button>
      )}
    </div>
  )
}
