import { useEffect, useState } from "react";
import axios from "axios";
import {baseURL, config} from "../../services"
import MovieCard from "../Shared/MovieCard";
import Grid from '@material-ui/core/Grid';

// set HomePage comp, create hooks
const HomePage = ({toggle, setToggle}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config)
      setMovies(resp.data.records)
    }
    getData()
  }, [toggle]);
    // try {
      // throw 'WHOOPS'
      // initalize GET request utilizing airtable
      // .then((resp) => setMovies(resp.data.records));
    // } catch (err) {
    //   console.error(err);
    // }

  // create container for CSS styling later
  // map through movie data
  // key property necessitates use of unique key aka movie.id
  return (
    <div className="HomePage container">
      <Grid container direction="row"
  justify="space-evenly"
  alignItems="center">
        {movies.map((movie) => (
        <MovieCard setToggle={setToggle} key={movie.id} movie={movie} />
      ))}
        </Grid>
    </div>
  );
};

export default HomePage;

// importing and passing props
// import browser router to index
// destructure currentURL out of params
// USE Link component 