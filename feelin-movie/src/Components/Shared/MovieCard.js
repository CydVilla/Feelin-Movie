import DeleteButton from "./DeleteButton";

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
