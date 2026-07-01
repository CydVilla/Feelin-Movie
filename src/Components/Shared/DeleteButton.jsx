import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { baseURL, config } from "../../services";
import { useHistory } from "react-router-dom";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";


// create Delete component
// try/catch axios delete functionatlity
// pass ID prop to DeleteButton
// create onClick property to contained button 

const DeleteButton = ({ id, setToggle, page }) => {
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteMovie = async () => {
    const movieURL = `${baseURL}/${id}`;
    try {
      setIsDeleting(true);
      await axios.delete(movieURL, config);
      if (page === "FullCard") {
        history.push("/");
      }
      setToggle((curr) => !curr);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      onClick={deleteMovie}
      variant="outlined"
      color="secondary"
      startIcon={<DeleteOutlineIcon />}
      disabled={isDeleting}
    >
      {isDeleting ? "Removing" : "Delete"}
    </Button>
  );
};
export default DeleteButton;
