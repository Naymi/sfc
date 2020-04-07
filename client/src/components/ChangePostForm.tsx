import React, { useState } from "react"
import { Formik } from "formik"
import { Form, Button } from "react-bootstrap"
import JoditEditor from "jodit-react"
import MaterialIcon from "material-icons-react"
const joditConf = { readonly: false }
function ChangePostForm({
  onSubmit = async () => true,
  defaultValue = { title: "", content: "" },
}: {
  defaultValue?: { content: string; title: string }
  onSubmit?: (data: { title: string; content: string }) => Promise<boolean>
}) {
  const { title, content: defaultContent } = defaultValue
  const [content, setContent] = useState(defaultContent)
  return (
    <Formik
      initialValues={{ title }}
      onSubmit={(data, { setSubmitting }) => {
        onSubmit({ ...data, content }).then((r) => setSubmitting(r))
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
            <JoditEditor
              config={joditConf}
              onBlur={(content) => {
                setContent(content)
              }}
              value={content}
            ></JoditEditor>
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
