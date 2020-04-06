import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { actionLogIn } from "../redux/slices/user";
import { Form, Button } from "react-bootstrap";
function LoginForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={({ login, password: pass }, { setSubmitting }) => {
        dispatch(actionLogIn({ login, pass }));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Form onSubmit={handleSubmit}>
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
  );
}

export default LoginForm;
