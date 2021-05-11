import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import Form from "./Form";

const ModalForm = ({}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form>Button</Form>
      </Modal>
    </>
  );
};

export default ModalForm;
