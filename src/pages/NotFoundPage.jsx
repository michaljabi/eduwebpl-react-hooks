import { PageLayout } from "../layouts/PageLayout.jsx"
import { useLocation } from "react-router-dom"

export function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <PageLayout title="Not found 404">
      <div className="notification is-warning">
        Page you requested <code>{pathname}</code> was not found.
      </div>
    </PageLayout>
  )
}
