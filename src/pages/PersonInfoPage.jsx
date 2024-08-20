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
    </PageLayout>
  )
}
