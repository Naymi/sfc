import React, { useState } from "react"
import { Button, Card, ButtonGroup } from "react-bootstrap"
// @ts-ignore
import MaterialIcon from "material-icons-react"
import ConfirmationModal from "./ConfirmationModal"
import ChangePostModal from "./ChangePostModal"
function PostCard({
  onRemove = async () => true,
  onUpdate = async () => true,
  post = { title: "untilled", content: "" },
}: {
  post: {
    title: string
    content: string
  }
  onRemove?: (post: { title: string; content: string }) => Promise<boolean>
  onUpdate?: (post: { title: string; content: string }) => Promise<boolean>
}) {
  const { content, title } = post
  const [showConfirmationRemove, setShowConfirmationRemove] = useState(false)
  const [showChangePostModal, setShowChangePostModal] = useState(false)
  return (
    <div>
      {showConfirmationRemove && (
        <ConfirmationModal
          show={showConfirmationRemove}
          text={"Удалить пост?"}
          // @ts-ignore
          onResolved={onRemove}
          onRejected={() => setShowConfirmationRemove(false)}
          onClosed={() => setShowConfirmationRemove(false)}
        ></ConfirmationModal>
      )}
      {showChangePostModal && (
        <ChangePostModal
          // @ts-ignore
          defaultValue={post}
          // @ts-ignore
          show={showChangePostModal}
          onHide={() => setShowChangePostModal(false)}
          onSubmit={async v => {
            await onUpdate(v)
            setShowChangePostModal(false)
            return true
          }}
        />
      )}
      <Card>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text dangerouslySetInnerHTML={{ __html: content }}></Card.Text>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            <Button
              variant="danger"
              onClick={() => setShowConfirmationRemove(true)}
            >
              <MaterialIcon icon={"delete"} color={"#fff"}></MaterialIcon>
            </Button>
            <Button variant="info" onClick={() => setShowChangePostModal(true)}>
              <MaterialIcon icon={"create"} color={"#fff"}></MaterialIcon>
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default PostCard
