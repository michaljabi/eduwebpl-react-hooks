import { useEffect, useState } from "react"
import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Notification } from "../ui/Notification.jsx"

export function Counter() {
  const [count, setCount] = useState(1)
  const [message, setMessage] = useState("hello ")
  useEffect(() => {
    console.log("Component created !")
  }, [])
  useEffect(() => {
    if (count === 3) {
      setMessage("Approaching to the monster...")
    }
    if (count === 5) {
      setMessage((m) => m + ", You are close...")
    }
    if (count === 6) {
      setMessage((m) => m + ", Danger ahead...")
    }
    if (count === 7) {
      setMessage((m) => m + ", You get caught 🧌!")
    }
    sayHello()
  }, [count])

  const isToHigh = count >= 5

  const sayHello = () => {
    setMessage((m) => m + "?")
  }

  if (count === 2) {
    return "No counter!"
  }

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
