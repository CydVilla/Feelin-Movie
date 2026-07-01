import React, { useState } from "react";
import { baseURL, config } from "../../services";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(520px, 90vw)",
    background: "linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(17, 24, 39, 0.88))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    borderRadius: 24,
    padding: theme.spacing(4.5, 5),
    boxShadow: "0 42px 80px rgba(15, 23, 42, 0.45)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3.5),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  fields: {
    display: "grid",
    gap: theme.spacing(2.5),
  },
  helper: {
    color: theme.palette.text.secondary,
    maxWidth: 420,
    lineHeight: 1.6,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1.5),
  },
}));

const Form = ({ setToggle, handleCloseMovieModal = () => {} }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedYear = parseInt(year, 10);
    const newReview = {
      title,
      year: Number.isNaN(parsedYear) ? "" : parsedYear,
      review,
      imageURL,
    };
    try {
      setIsSubmitting(true);
      await axios.post(baseURL, { fields: newReview }, config);
      setToggle((curr) => !curr);
      setTitle("");
      setYear("");
      setReview("");
      setImageURL("");
      handleCloseMovieModal();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <Typography id="create-review-title" variant="h5" component="h2">
            Create a review
          </Typography>
          <Typography id="create-review-description" variant="body2" className={classes.helper}>
            Share a quick snapshot of what made this film unforgettable.
          </Typography>
        </div>
        <div className={classes.fields}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
          <TextField
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            variant="outlined"
            color="primary"
            type="number"
            fullWidth
            inputProps={{ min: 1888, max: new Date().getFullYear() + 1 }}
            required
          />
          <TextField
            label="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            variant="outlined"
            color="primary"
            multiline
            rows={4}
            fullWidth
            required
          />
          <TextField
            label="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            variant="outlined"
            color="primary"
            fullWidth
            placeholder="https://"
          />
        </div>
        <div className={classes.actions}>
          <Button type="button" onClick={handleCloseMovieModal} color="default" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Saving" : "Submit review"}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
