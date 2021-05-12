import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Shared/MovieCard"


const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    try {
    // throw 'WHOOPS'
    axios.get(process.env.REACT_APP_API_KEY).then(resp => setMovies(resp.data.records));
    } catch (err) {
      console.error(err)
    }
    
  }, []);
  


  return <div className="HomePage container">  {
    movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))
  } </div>;
};

export default HomePage;



