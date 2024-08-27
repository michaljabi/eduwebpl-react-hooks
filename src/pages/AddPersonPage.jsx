import { PageLayout } from "../layouts/PageLayout.jsx"
import { useFormik } from "formik"
import { peopleService } from "../services/peopleService.js"
import { Input } from "../components/ui/Input.jsx"
import { Button } from "../components/ui/Button.jsx"

import JSConfetti from "js-confetti"
import { useRef } from "react"

export function AddPersonPage() {
  const confettiRef = useRef(null)
  if (confettiRef.current === null) {
    confettiRef.current = new JSConfetti()
  }

  const formik = useFormik({
    initialValues: {
      personName: "",
      email: "",
    },
    onSubmit: async (values, actions) => {
      try {
        const { personName: name, email } = values
        await peopleService.addPerson({ name, email })
        confettiRef.current.addConfetti()
        actions.resetForm()
      } catch (e) {
        console.error(e)
      }
    },
    validate: (values) => {
      const errors = {}
      if (!values.personName) {
        errors.personName = "Name is required"
      }
      if (values.personName && values.personName.length < 2) {
        errors.personName = "Name need to be at least 2 characters long"
      }
      if (!values.email) {
        errors.email = "email address is required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address"
      }
      return errors
    },
  })

  return (
    <PageLayout title="Add new person">
      <form
        className="mx-auto mt-6 lg:w-1/2 xl:w-1/3 w-full px-10 md:px-40 lg:px-0 space-y-8"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <Input
          label="Name"
          name="personName"
          placeholder=""
          error={formik.errors.personName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.personName}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="e-mail address"
          error={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <p
          className="flex justify-end mt-6"
          style={{
            opacity: formik.isValid && formik.dirty ? 1 : 0.6,
          }}
        >
          <Button className="w-full justify-center mx-0" type="submit">
            Add person
          </Button>
        </p>
      </form>
    </PageLayout>
  )
}
