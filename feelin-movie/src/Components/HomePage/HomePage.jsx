import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Shared/MovieCard"

// set HomePage comp, create hooks
const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    try {
    // throw 'WHOOPS'
    // initalize GET request utilizing airtable 
    axios.get(process.env.REACT_APP_API_KEY).then(resp => setMovies(resp.data.records));
    } catch (err) {
      console.error(err)
    }
    
  }, []);

  // create container for CSS styling later
  // map through movie data
  // key property necessitates use of unique key aka movie.id
  return <div className="HomePage container">  {
    movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))
  } </div>;
};

export default HomePage;



