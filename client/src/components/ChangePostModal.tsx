import React from "react";
import { Modal } from "react-bootstrap";
import ChangePostForm from "./ChangePostForm";

function ChangePostModal({
  show,
  onHide = () => {},
  onSubmit = async () => true,
  defaultValue
}: {
  show?: boolean;
  defaultValue?: { content: string; title: string };
  onHide: () => any;
  onSubmit?: (data: { title: string; content: string }) => Promise<boolean>;
}) {
  return (
    <Modal show={show} onHide={onHide} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChangePostForm
          defaultValue={defaultValue}
          onSubmit={onSubmit}
        ></ChangePostForm>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePostModal;
