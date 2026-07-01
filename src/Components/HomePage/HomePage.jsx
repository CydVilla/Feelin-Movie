import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import MovieCard from "../Shared/MovieCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import "./HomePage.css";

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
      setError("Failed to load your reviews. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, toggle]);

  return (
    <div className="HomePage">
      <section className="HomePage__hero">
        <span className="HomePage__eyebrow">
          <span className="HomePage__dot HomePage__dot--green" />
          <span className="HomePage__dot HomePage__dot--blue" />
          <span className="HomePage__dot HomePage__dot--orange" />
          The social film journal
        </span>
        <Typography variant="h3" component="h1" className="HomePage__hero-title">
          Track films you’ve watched.<br />Save those you want to see.
        </Typography>
        <Typography variant="body1" className="HomePage__hero-subtitle">
          Tell your friends what’s good. Keep every sharp take, favourite scene, and
          rainy-day watchlist pick in one beautiful place.
        </Typography>
      </section>

      <section className="HomePage__section">
        <div className="HomePage__section-head">
          <Typography variant="overline" className="HomePage__section-label">
            Recent reviews
          </Typography>
          {!isLoading && !error && movies.length > 0 && (
            <Typography variant="body2" className="HomePage__count">
              {movies.length} {movies.length === 1 ? "film" : "films"} logged
            </Typography>
          )}
        </div>

        <Grid container spacing={3} alignItems="stretch" className="HomePage__grid">
          {isLoading ? (
            <Grid item xs={12} className="HomePage__feedback">
              <CircularProgress color="primary" />
              <Typography variant="body2" color="textSecondary">
                Loading your cinematic picks...
              </Typography>
            </Grid>
          ) : error ? (
            <Grid item xs={12} className="HomePage__feedback">
              <Typography variant="h6">We hit a snag.</Typography>
              <Typography variant="body2" color="textSecondary">{error}</Typography>
              <Button variant="contained" color="primary" onClick={fetchMovies}>
                Retry
              </Button>
            </Grid>
          ) : movies.length ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <Grid item xs={12} className="HomePage__feedback">
              <Typography variant="h6">Nothing logged yet — start the reel.</Typography>
              <Typography variant="body2" color="textSecondary">
                Use “Log a film” to post something you loved (or didn’t) and keep your
                friends in the loop.
              </Typography>
            </Grid>
          )}
        </Grid>
      </section>
    </div>
  );
};

export default HomePage;
