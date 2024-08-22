import { PageLayout } from "../layouts/PageLayout.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Notification } from "../components/ui/Notification.jsx"
import { peopleService } from "../services/peopleService.js"

export function PersonInfoPage() {
  const [person, setPerson] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const { personId } = useParams()

  const isReady = Boolean(person.email)

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      setLoading(true)
      try {
        const { data } = await peopleService.getPerson(
          personId,
          controller.signal,
        )
        setPerson(data)
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    })()

    return () => {
      controller.abort()
    }
  }, [personId])

  return (
    <PageLayout title="Person info">
      {isLoading && (
        <Notification>Loading data about {personId}...</Notification>
      )}
      {errorMessage && (
        <Notification type="danger">{errorMessage}</Notification>
      )}
      {isReady && (
        <section className="m-3 p-3 border space-y-4 rounded">
          <h3 className="ml-4">{person.name}</h3>
          <strong className="ml-4">{person.email}</strong>
          <div className="m-4 p-2 bg-gray-200 dark:bg-slate-700 dark:text-gray-100 rounded">
            {person.bio}
          </div>
        </section>
      )}
    </PageLayout>
  )
}
