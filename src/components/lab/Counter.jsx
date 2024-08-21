import { useEffect, useState } from "react"
import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Notification } from "../ui/Notification.jsx"

export function Counter() {
  const [count, setCount] = useState(1)

  const isToHigh = count >= 5

  useEffect(() => {
    console.log("componentDidMount")
    const id = setTimeout(() => {
      setCount((c) => {
        console.log("componentDidUpdate")
        return c + 1
      })
    }, 5000)
    return () => {
      console.log("componentWillUnmount")
      clearTimeout(id)
    }
  }, [])

  return (
    <div className="rounded p-6 border border-slate-400 text-center">
      <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
        {count}
      </div>
      {isToHigh && <Notification type="danger">Level too high!</Notification>}
      <Button
        className="m-2"
        as="secondary"
        onClick={() => setCount(count - 1)}
      >
        <MinusIcon color="red" /> minus
      </Button>
      <Button
        onClick={() => {
          if (!isToHigh) {
            setCount(count + 1)
          }
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
