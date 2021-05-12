import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Shared/MovieCard"

const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_KEY).then(resp => setMovies(resp.data.records));
    
  }, []);
  
  // no fragment, create container, params/code block 
 // keep variables seprate

  return <div className="HomePage container">  {
    movies.map(movie => (
      <MovieCard movie={movie} />
    ))
  } </div>;
};

export default HomePage;
