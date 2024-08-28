import { useEffect, useState } from "react"
import axios, { CanceledError } from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

export function usePeopleQueryOld(initialState, personId) {
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      setIsLoading(true)
      try {
        const url = personId ? `/people/${personId}` : "/people"
        const { data } = await axiosInstance.get(url, {
          signal: controller.signal,
        })
        setData(data)
      } catch (error) {
        if (error instanceof CanceledError) {
          return
        }
        setErrorMessage(error.message)
      } finally {
        setIsLoading(false)
      }
    })()

    return () => {
      controller.abort()
    }
  }, [personId])

  return { data, isLoading, errorMessage }
}
