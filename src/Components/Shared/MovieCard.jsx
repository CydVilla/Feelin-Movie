import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import './MovieCard.css';


// create MovieCard component, pass in deconstructed movie prop
// wrap contents of the first <div> into an <a> to allow the movie card to render clickable MovieCard(s)

const MovieCard = ({ movie, setToggle }) => {
  return (
    <Grid item sm={6} lg={4}>
    <Grid container direction="column" justify="center" alignItems="center">
          <Link to={`/movie/${movie.id}`}>
            <img className='images' src={movie.fields.imageURL} />
            <p>{movie.fields.title}</p>
            <p>{movie.fields.year}</p>
          </Link>
        </Grid>
      </Grid>
  );
};

export default MovieCard;
