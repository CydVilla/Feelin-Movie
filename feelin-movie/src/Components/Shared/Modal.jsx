import { Modal } from "@material-ui/core";
import Form from "./Form";


// pass in created deconstructed props from return
// add <Form> to toggle Form on browser on the header 

const ModalForm = ({isMovieModalOpen, handleCloseMovieModal}) => {
 
  return (
      <Modal
        open={isMovieModalOpen}
        onClose={handleCloseMovieModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form />
      </Modal>
  );
};

export default ModalForm;
