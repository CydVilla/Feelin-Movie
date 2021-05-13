import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";


// create MovieCard component, pass in deconstructed movie prop
// wrap contents of the first <div> into an <a> to allow the movie card to render clickable MovieCard(s)

const MovieCard = ({ movie, setToggle }) => {
  return (
    <div>
      {/* <a href={`/movie/${movie.id}`}> */}
      <div>
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.fields.imageURL} />
          <span>{movie.fields.title}</span>
          <span>{movie.fields.year}</span>
          </Link>
        </div>
      {/* </a> */}
      <DeleteButton setToggle={setToggle} id={movie.id} />
    </div>
  );
};

export default MovieCard;
