import { PageLayout } from "../layouts/PageLayout.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Notification } from "../components/ui/Notification.jsx"

export function PersonInfoPage() {
  const [isLoading, setLoading] = useState(true)
  const { personName } = useParams()

  useEffect(() => {
    // loading data from back-end
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [personName])

  return (
    <PageLayout title="Person info">
      {isLoading && (
        <Notification>Loading data about {personName}...</Notification>
      )}
      <section className="m-3 p-3 border space-y-4 rounded">
        <h3 className="ml-4">name</h3>
        <strong className="ml-4">email</strong>
        <div className="m-4 p-2 bg-gray-200 dark:bg-slate-700 dark:text-gray-100 rounded">
          bio
        </div>
      </section>
    </PageLayout>
  )
}
