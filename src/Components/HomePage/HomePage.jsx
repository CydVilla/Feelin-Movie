import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import MovieCard from "../Shared/MovieCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import "./HomePage.css";

// set HomePage comp, create hooks
const HomePage = ({ toggle }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const resp = await axios.get(baseURL, config);
      setMovies(resp.data.records);
    } catch (err) {
      console.error(err);
      setMovies([]);
      setError("We couldn't load your reviews right now.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, toggle]);

  // create container for CSS styling later
  // map through movie data
  // key property necessitates use of unique key aka movie.id
  return (
    <div className="HomePage">
      <section className="HomePage__hero">
        <Typography variant="h3" component="h1">
          Your personal film journal
        </Typography>
        <Typography variant="body1" className="HomePage__hero-subtitle">
          Collect your favourite scenes, share sharp takes, and keep your watchlist in one beautiful place.
        </Typography>
      </section>
      <Grid
        container
        spacing={4}
        alignItems="stretch"
        className="HomePage__grid"
      >
        {isLoading ? (
          <Grid item xs={12} className="HomePage__feedback">
            <CircularProgress color="secondary" />
            <Typography variant="body2" color="textSecondary">
              Loading your cinematic picks...
            </Typography>
          </Grid>
        ) : error ? (
          <Grid item xs={12} className="HomePage__feedback">
            <Typography variant="h6">We hit a snag.</Typography>
            <Typography variant="body2" color="textSecondary">
              {error} Check your connection and try again.
            </Typography>
            <Button variant="outlined" color="primary" onClick={fetchMovies}>
              Retry
            </Button>
          </Grid>
        ) : movies.length ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <Grid item xs={12} className="HomePage__feedback">
            <Typography variant="h6">Nothing here yet — start the conversation.</Typography>
            <Typography variant="body2" color="textSecondary">
              Use “Add review” to post a film you loved (or didn’t) and keep your friends in the loop.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;