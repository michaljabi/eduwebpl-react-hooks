import { useEffect, useState } from "react"

export function useCounterWithMonster(initialCount) {
  const [count, setCount] = useState(initialCount)
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

  const addOne = () => {
    setCount((c) => c + 1)
  }

  const minusOne = () => {
    setCount((c) => c - 1)
  }

  const resetCounter = () => {
    setCount(1)
  }

  return { count, message, addOne, minusOne, resetCounter, isToHigh }
}
