import { useEffect, useState } from "react"
import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Notification } from "../ui/Notification.jsx"

export function Counter() {
  const [count, setCount] = useState(1)
  const [message, setMessage] = useState("")

  const isToHigh = count >= 5

  // TASK:
  // level 3: Approaching to the monster...
  // level 5: You are close...
  // level 6: Danger ahead...
  // level 7: You get caught 🧌!
  useEffect(() => {
    console.log("Component created !")
  }, [])

  useEffect(() => {
    if (count === 3) {
      setMessage("Approaching to the monster...")
    }
    if (count === 5) {
      setMessage("You are close...")
    }
    if (count === 6) {
      setMessage("Danger ahead...")
    }
    if (count === 7) {
      setMessage("You get caught 🧌!")
    }
  }, [count])

  return (
    <div className="rounded p-6 border border-slate-400 text-center">
      <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
        {count}
      </div>
      {message && <Notification>{message}</Notification>}
      <Button
        className="m-2"
        as="secondary"
        onClick={() => setCount(count - 1)}
      >
        <MinusIcon color="red" /> minus
      </Button>
      <Button
        onClick={() => {
          //if (!isToHigh) {
          setCount(count + 1)
          // }
        }}
      >
        <PlusIcon color="lightgreen" /> plus
      </Button>
      {isToHigh && (
        <Button as="secondary" onClick={() => setCount(1)}>
          <TrashIcon /> reset
        </Button>
      )}
    </div>
  )
}
