import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import JoditEditor from "jodit-react"
import MaterialIcon from "material-icons-react"
import { useForm, Controller } from "react-hook-form"
const joditConf = { readonly: false }
interface FormData {
  title: string
  content: string
}
function ChangePostForm({
  onSubmit = async () => true,
  defaultValue: defaultValues = { title: "", content: "" },
}: {
  defaultValue?: { content: string; title: string }
  onSubmit?: (data: { title: string; content: string }) => Promise<boolean>
}) {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues,
  })
  return (
    <Form
      onSubmit={handleSubmit((v) => {
        onSubmit(v)
      })}
    >
      <label>
        <span>Title</span>
        <Form.Control name="title" ref={register} />
      </label>
      <br />
      <label>
        <span>Content</span>
        <Controller
          // @ts-ignore
          as={<JoditEditor config={joditConf} />}
          name="content"
          control={control}
        ></Controller>
      </label>
      <br />

      <Button type="submit">
        <MaterialIcon icon="save" color="#fff"></MaterialIcon>
      </Button>
    </Form>
  )
}

export default ChangePostForm
