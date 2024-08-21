import { PageLayout } from "../layouts/PageLayout.jsx"
import { Notification } from "../components/ui/Notification.jsx"
// import { Inception } from "../components/lab/Inception.jsx"
import { Counter } from "../components/lab/Counter.jsx"
import { Button } from "../components/ui/Button.jsx"
import { useState } from "react"
// import { CounterClass } from "../components/lab/CounterClass.jsx"

export function LaboratoryPage() {
  console.log("🧪 %cLaboratoryPage", `color: teal`, "fired")

  const [isShown, setIsShown] = useState(true)

  return (
    <PageLayout title="Laboratory">
      <Notification className="m-6 lg:w-[60%] lg:mx-auto" type="warn">
        This page is here <em> only </em> for our Experiments...
      </Notification>
      <Button as="secondary" onClick={() => setIsShown(!isShown)}>
        Toggle counter
      </Button>
      <section className="my-8 flex justify-center">
        {isShown && <Counter />}
        {/*<CounterClass />*/}
      </section>
      {/*<Inception />*/}
    </PageLayout>
  )
}
