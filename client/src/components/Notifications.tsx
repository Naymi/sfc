import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Modal, Card } from "react-bootstrap"
import { notificationSelector, clear } from "../redux/slices/notifications"

function Erors() {
  const dispatch = useDispatch()
  const errors = useSelector(notificationSelector)
  return (
    <div>
      <Modal show={!!errors.length} onHide={() => dispatch(clear())}>
        <Modal.Body>
          {errors.map(({ message, title }) => (
            <Card>
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <p>{message}</p>
              </Card.Body>
            </Card>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Erors
