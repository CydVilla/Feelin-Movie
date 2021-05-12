import DeleteButton from "./DeleteButton";


// create MovieCard component, pass in deconstructed movie prop
// wrap contents of the first <div> into an <a> to allow the movie card to render clickable MovieCard(s)

const MovieCard = ({ movie }) => {
  return (
    <div>
      <a href={`/movie/${movie.id}`}>
        <div>
          <img src={movie.fields.imageURL} />
          <span>{movie.fields.title}</span>
          <span>{movie.fields.year}</span>
        </div>
      </a>
      <DeleteButton id={movie.id} />
    </div>
  );
};

export default MovieCard;
