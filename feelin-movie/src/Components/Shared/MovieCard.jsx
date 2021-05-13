import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import './MovieCard.css';


// create MovieCard component, pass in deconstructed movie prop
// wrap contents of the first <div> into an <a> to allow the movie card to render clickable MovieCard(s)

const MovieCard = ({ movie, setToggle }) => {
  return (
    <Grid item sm={3}>
    <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Link to={`/movie/${movie.id}`}>
            <img className='images' src={movie.fields.imageURL} />
            <p>{movie.fields.title}</p>
            <p>{movie.fields.year}</p>
          </Link>
          <DeleteButton setToggle={setToggle} id={movie.id} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieCard;
