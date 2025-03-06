import React, { useState } from "react";
import { baseURL, config } from "../../services";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';


// Create Form component
// create hooks for API data
// handleSubmit function
// try/catch axios.post() to upload data (newReview) on Form via browser to database




function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Form = ({ toggle, setToggle }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      title,
      year,
      review,
      imageURL,
    };
    await axios.post(baseURL, { fields: newReview }, config);
    setToggle((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit} style={modalStyle} className={classes.form}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
        <TextField id="standard-basic" label="Title"  value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField id="standard-basic" label="Year" value={year}  type='number'
            onChange={(e) => setYear(e.target.valueAsNumber)} />
        </Grid>
        <Grid item>
        <TextField id="standard-basic" label="Review"  value={review} 
            onChange={(e) => setReview(e.target.value)}
          />
        </Grid>
        <Grid item>
        <TextField id="standard-basic" label="imageURL"  value={imageURL } onChange={(e) => setImageURL(e.target.value)}
          />
        </Grid>
        <Grid item>
          <button type="submit">Submit Review</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
