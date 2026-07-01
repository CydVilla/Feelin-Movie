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
    width: "min(520px, 92vw)",
    maxHeight: "90vh",
    overflowY: "auto",
    background: "linear-gradient(160deg, #2c3440 0%, #1c252c 100%)",
    border: "1px solid rgba(120, 140, 160, 0.18)",
    borderRadius: 14,
    padding: theme.spacing(4, 4.5),
    boxShadow: "0 42px 90px rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    outline: "none",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.25),
  },
  dots: {
    display: "inline-flex",
    flexShrink: 0,
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: "50%",
    display: "inline-block",
  },
  dotGreen: { backgroundColor: theme.accents.green, marginRight: -4 },
  dotBlue: { backgroundColor: theme.accents.blue, marginRight: -4 },
  dotOrange: { backgroundColor: theme.accents.orange },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  fields: {
    display: "grid",
    gap: theme.spacing(2.25),
  },
  helper: {
    color: theme.palette.text.secondary,
    maxWidth: 420,
    lineHeight: 1.6,
    marginTop: theme.spacing(0.5),
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1.5),
  },
}));

const Form = ({ onReviewCreated, handleCloseMovieModal = () => {} }) => {
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
      if (onReviewCreated) {
        onReviewCreated();
      }
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
          <div className={classes.header}>
            <span className={classes.dots} aria-hidden="true">
              <span className={`${classes.dot} ${classes.dotGreen}`} />
              <span className={`${classes.dot} ${classes.dotBlue}`} />
              <span className={`${classes.dot} ${classes.dotOrange}`} />
            </span>
            <Typography id="create-review-title" variant="h5" component="h2">
              Log a film
            </Typography>
          </div>
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
            {isSubmitting ? "Saving" : "Post review"}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
