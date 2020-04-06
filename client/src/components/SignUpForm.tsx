import React from "react"
import { Formik } from "formik"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { actionSignUp } from "../redux/slices/user"

function SignUpForm({ onComplete }: { onComplete?: () => any }) {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{ login: "", password: "", name: "" }}
      onSubmit={({ password: pass, ...data }, { setSubmitting }) => {
        // @ts-ignore
        dispatch(actionSignUp({ ...data, pass })).then(onComplete)
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <Form.Control
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
          </label>
          <label>
            <span>Login</span>
            <Form.Control
              type="login"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            />
            {errors.login && touched.login && errors.login}
          </label>
          <br />
          <label>
            <span>Password</span>
            <Form.Control
              type="password"
              name="password"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </label>
          <br />

          <Button type="submit" disabled={isSubmitting}>
            OK
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
