import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_KEY).then(resp => setMovies(resp.data.records));
    
  },[]);
  return <> {
    movies.map(movie => (
      <a key={movie.id} href='#'>
        <div>
        <img src={movie.fields.imageURL} />
        <span>{movie.fields.title}</span>
        <span>{movie.fields.year}</span>

      </div>
      </a>
    ))
  } </>;
};

export default HomePage;
