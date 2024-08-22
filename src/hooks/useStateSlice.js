import { useState } from "react"

export function useStateSlice(initialState) {
  const [myData, setMyData] = useState(initialState)

  const setState = (partialState) => {
    setMyData((s) => ({ ...s, ...partialState }))
  }

  return [myData, setState]
}
