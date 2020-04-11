import React from "react"
import { useDispatch } from "react-redux"
import { actionLogIn } from "../redux/slices/user"
import { Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
function LoginForm() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit(({ login, password: pass }) => {
    dispatch(actionLogIn({ login, pass }))
  })
  return (
    <Form onSubmit={onSubmit}>
      <label>
        <span>Login</span>
        <Form.Control
          // @ts-ignore
          ref={register({ required: true })}
          name="login"
        />
      </label>
      <br />
      <label>
        <span>Password</span>
        <Form.Control
          type="password"
          name="password"
          // @ts-ignore
          ref={register({ required: true })}
        />
      </label>
      <br />
      <Button type="submit">OK</Button>
    </Form>
  )
}

export default LoginForm
