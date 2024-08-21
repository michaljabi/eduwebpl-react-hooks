import { useState } from "react"
import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon } from "lucide-react"

export function Counter() {
  const [count, setCount] = useState(5)

  const addTwo = () => {
    setCount((c) => c + 2)
    // setCount((c) => c + 1)
  }

  // setInterval(() => {
  //   setCount((c) => c + 1)
  // }, 1000)
  // console.log("RENDER!")
  // setCount(50)

  return (
    <div className="rounded p-6 border border-slate-400 text-center">
      <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
        {count}
      </div>
      <Button
        className="m-2"
        as="secondary"
        onClick={() => setCount(count - 1)}
      >
        <MinusIcon color="red" /> minus
      </Button>
      <Button onClick={() => setCount(count + 1)}>
        <PlusIcon color="lightgreen" /> plus
      </Button>
      <Button as="secondary" onClick={addTwo}>
        <PlusIcon color="lightgreen" /> +2
      </Button>
    </div>
  )
}
