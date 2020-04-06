import React from "react"
import { Modal, Button } from "react-bootstrap"

function ConfirmationModal({
  text,
  onResolved,
  onRejected,
  onClosed,
  show,
}: {
  show: boolean
  text: string
  onResolved: () => any
  onRejected: () => any
  onClosed: () => any
}) {
  return (
    <Modal show={show} onHide={onClosed}>
      <Modal.Header>Требуется подтверждение</Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onResolved}>Да</Button>
        <Button onClick={onRejected}>Нет</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationModal
