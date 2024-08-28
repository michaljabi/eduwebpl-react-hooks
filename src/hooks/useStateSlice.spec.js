import { it, describe, expect } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useStateSlice } from "./useStateSlice.js"

describe("useStateSlice", () => {
  it("should be initialized with given data", () => {
    // Arrange
    const initialState = { name: "Michał" }
    const { result } = renderHook(() => useStateSlice(initialState))
    // ACT
    const [data] = result.current
    // assert
    expect(data).toEqual({ name: "Michał" })
  })

  it("should update state when setter is called", () => {
    const { result } = renderHook(() => useStateSlice({}))

    // ACT
    act(() => {
      const [, setState] = result.current
      setState({ hello: "world" })
    })

    expect(result.current[0]).toEqual({ hello: "world" })
  })

  it("should update only the slice the rest of the state should be intact", () => {
    const { result } = renderHook(() =>
      useStateSlice({
        hello: "World",
        name: "Michał",
        sth: 23,
      }),
    )

    act(() => {
      const [, setState] = result.current
      setState({ name: "Kamil" })
    })

    //expect(result.current[0]).toHaveProperty("name", "Kamil")
    expect(result.current[0]).toEqual({
      hello: "World",
      name: "Kamil",
      sth: 23,
    })
  })
})
