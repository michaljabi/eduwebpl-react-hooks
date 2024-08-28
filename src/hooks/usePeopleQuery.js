import { useEffect, useReducer } from "react"
import axios, { CanceledError } from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

const ACTIONS = {
  SET_DATA: "set-data",
  SET_LOADING: "set-loading",
  SET_ERROR: "set-error",
  CLEAR_ERROR: "clear-error",
}

function reducerQuery(state, action) {
  let errorMessage = state.errorMessage
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return { ...state, data: action.data, errorMessage: "" }
    case ACTIONS.SET_ERROR:
      return { ...state, errorMessage: action.message }
    case ACTIONS.CLEAR_ERROR:
      return { ...state, errorMessage: "", isLoading: false }
    case ACTIONS.SET_LOADING:
      if (!state.isLoading && action.load) {
        errorMessage = ""
      }
      return { ...state, isLoading: action.load, errorMessage }
    default:
      throw new Error(`Action ${action.type} not supported`)
  }
}

export function usePeopleQuery(initialData, personId) {
  const [state, dispatch] = useReducer(reducerQuery, {
    data: initialData,
    isLoading: false,
    errorMessage: "",
  })
  const { data, isLoading, errorMessage } = state

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      dispatch({ type: ACTIONS.SET_LOADING, load: true })
      try {
        const url = personId ? `/people/${personId}` : "/people"
        const { data } = await axiosInstance.get(url, {
          signal: controller.signal,
        })
        dispatch({ type: ACTIONS.SET_DATA, data })
      } catch (error) {
        if (error instanceof CanceledError) {
          return
        }
        dispatch({ type: ACTIONS.SET_ERROR, message: error.message })
      } finally {
        dispatch({ type: ACTIONS.CLEAR_ERROR })
      }
    })()

    return () => {
      controller.abort()
    }
  }, [personId])

  return { data, isLoading, errorMessage }
}
