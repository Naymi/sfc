import React from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { actionSignUp } from "../redux/slices/user"
import { useForm } from "react-hook-form"

function SignUpForm({ onComplete }: { onComplete?: () => any }) {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit(({ password: pass, ...data }) => {
    // @ts-ignore
    dispatch(actionSignUp({ ...data, pass })).then(onComplete)
  })
  return (
    <Form onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <Form.Control name="name" ref={register} />
      </label>
      <label>
        <span>Login</span>
        <Form.Control name="login" ref={register} />
      </label>
      <br />
      <label>
        <span>Password</span>
        <Form.Control type="password" name="password" ref={register} />
      </label>
      <br />

      <Button type="submit">OK</Button>
    </Form>
  )
}

export default SignUpForm
