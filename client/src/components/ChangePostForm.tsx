import React from "react"
import { Formik } from "formik"
import { Form, Button } from "react-bootstrap"
import JoditEditor from "jodit-react"
// @ts-ignore
import MaterialIcon from "material-icons-react"
const joditConf = { readonly: false }
function ChangePostForm({
  onSubmit = async () => true,
  defaultValue = { title: "", content: "" },
}: {
  defaultValue?: { content: string; title: string }
  onSubmit?: (data: { title: string; content: string }) => Promise<boolean>
}) {
  return (
    <Formik
      initialValues={defaultValue}
      onSubmit={(data, { setSubmitting }) => {
        onSubmit(data).then((r) => setSubmitting(r))
      }}
    >
      {({
        setValues,
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
            <span>Title</span>
            <Form.Control
              name="title"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
          </label>
          <br />
          <label>
            <span>Content</span>
            {/* <Form.Control
              as="textarea"
              rows="3"
              name="content"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            /> */}
            <JoditEditor
              config={joditConf}
              onBlur={(content) => {
                setValues({ ...values, content })
              }}
              value={values.content}
            ></JoditEditor>
            {errors.content && touched.content && errors.content}
          </label>
          <br />

          <Button type="submit" disabled={isSubmitting}>
            <MaterialIcon icon="save" color="#fff"></MaterialIcon>
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePostForm
