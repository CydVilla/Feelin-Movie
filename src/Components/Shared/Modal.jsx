import React from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import Form from "./Form";


// pass in created deconstructed props from return
// add <Form> to toggle Form on browser on the header 

const ModalForm = ({ isMovieModalOpen, handleCloseMovieModal, onReviewCreated }) => {
  return (
    <Modal
      open={isMovieModalOpen}
      onClose={handleCloseMovieModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 400 }}
      aria-labelledby="create-review-title"
      aria-describedby="create-review-description"
    >
      <Fade in={isMovieModalOpen}>
        <div>
          <Form
            onReviewCreated={onReviewCreated}
            handleCloseMovieModal={handleCloseMovieModal}
          />
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalForm;
