import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_KEY).then(resp => setMovies(resp.data.records));
    
  }, []);
  
  // no fragment, create container, params/code block 
 // keep variables seprate

  return <div className="HomePage container">  {
    movies.map(movie => (
      <a key={movie.id}>
        <div>
        <img src={movie.fields.imageURL} />
        <span>{movie.fields.title}</span>
        <span>{movie.fields.year}</span>

      </div>
      </a>
    ))
  } </div>;
};

export default HomePage;
