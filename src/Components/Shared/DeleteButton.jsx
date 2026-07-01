import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { baseURL, config } from "../../services";
import { useHistory } from "react-router-dom";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles(() => ({
  deleteButton: {
    color: "#ff5c5c",
    borderColor: "rgba(255, 92, 92, 0.4)",
    "&:hover": {
      backgroundColor: "rgba(255, 92, 92, 0.12)",
      borderColor: "rgba(255, 92, 92, 0.7)",
    },
  },
}));

const DeleteButton = ({ id, setToggle, page }) => {
  const classes = useStyles();
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
      className={classes.deleteButton}
      startIcon={<DeleteOutlineIcon />}
      disabled={isDeleting}
    >
      {isDeleting ? "Removing" : "Delete"}
    </Button>
  );
};

export default DeleteButton;
