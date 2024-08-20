import { PageLayout } from "../layouts/PageLayout.jsx"
import { Notification } from "../components/ui/Notification.jsx"
import { Button } from "../components/ui/Button.jsx"
import { MinusIcon, PlusIcon } from "lucide-react"

export function LaboratoryPage() {
  // console.log("🧪 %cLaboratoryPage", `color: teal`, "fired")

  return (
    <PageLayout title="Laboratory">
      <Notification className="m-6 lg:w-[60%] lg:mx-auto" type="warn">
        This page is here <em> only </em> for our Experiments...
      </Notification>
      <section className="my-8 flex justify-center">
        <div className="rounded p-6 border border-slate-400 text-center">
          <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
            {1}
          </div>
          <Button className="m-2" as="secondary">
            <MinusIcon color="red" /> minus
          </Button>
          <Button>
            <PlusIcon color="lightgreen" /> plus
          </Button>
        </div>
      </section>
      {/*<Inception />*/}
    </PageLayout>
  )
}
