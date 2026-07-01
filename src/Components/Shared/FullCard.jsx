import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { useParams, Link } from "react-router-dom";
import { baseURL, config } from "../../services";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  shell: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "min(1000px, 100%)",
    display: "grid",
    gap: theme.spacing(3),
  },
  backLink: {
    alignSelf: "flex-start",
    color: theme.palette.text.secondary,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 300px) minmax(0, 1fr)",
    gap: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  posterWrap: {
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(120, 140, 160, 0.18)",
    boxShadow: "0 20px 48px rgba(0, 0, 0, 0.5)",
    aspectRatio: "2 / 3",
    background: "linear-gradient(160deg, #2c3440, #14181c)",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 240,
      margin: "0 auto",
    },
  },
  poster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  details: {
    display: "grid",
    gap: theme.spacing(2),
    alignContent: "start",
  },
  titleRow: {
    display: "flex",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: theme.spacing(1.5),
  },
  title: {
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1.1,
  },
  year: {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: "1.25rem",
  },
  divider: {
    height: 1,
    background: "rgba(120, 140, 160, 0.16)",
    border: "none",
    margin: 0,
    width: "100%",
  },
  sectionLabel: {
    color: theme.accents.green,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontSize: "0.72rem",
    fontWeight: 700,
  },
  reviewBody: {
    color: theme.palette.text.primary,
    fontSize: "1.05rem",
    lineHeight: 1.85,
    whiteSpace: "pre-wrap",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    marginTop: theme.spacing(1),
    flexWrap: "wrap",
  },
  actionsHint: {
    color: theme.palette.text.secondary,
    fontSize: "0.85rem",
    maxWidth: 360,
  },
  emptyState: {
    padding: theme.spacing(5),
    borderRadius: 12,
    textAlign: "center",
    background: "rgba(28, 37, 44, 0.7)",
    border: "1px dashed rgba(120, 140, 160, 0.24)",
    color: theme.palette.text.secondary,
    display: "grid",
    gap: theme.spacing(1.5),
    justifyItems: "center",
  },
}));

const FullCard = ({ setToggle }) => {
  const classes = useStyles();
  const currentURL = useParams();
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
      setError("Failed to load this review. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const movie = movies.find((m) => m.id === currentURL.id);
  const posterFallback =
    "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className={classes.shell}>
      <div className={classes.container}>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackRoundedIcon />}
          className={classes.backLink}
        >
          Back to reviews
        </Button>

        {isLoading ? (
          <Paper elevation={0} className={classes.emptyState}>
            <CircularProgress color="primary" />
            <Typography variant="body2">Fetching the full review...</Typography>
          </Paper>
        ) : error ? (
          <Paper elevation={0} className={classes.emptyState}>
            <Typography variant="h6">We couldn't load that review.</Typography>
            <Typography variant="body2">{error}</Typography>
            <Button variant="contained" color="primary" onClick={fetchMovies}>
              Retry
            </Button>
          </Paper>
        ) : movie ? (
          <div className={classes.layout}>
            <div className={classes.posterWrap}>
              <img
                className={classes.poster}
                src={movie.fields.imageURL || posterFallback}
                alt={`${movie.fields.title || "Movie"} poster`}
              />
            </div>
            <div className={classes.details}>
              <div className={classes.titleRow}>
                <Typography variant="h3" className={classes.title}>
                  {movie.fields.title}
                </Typography>
                {movie.fields.year && (
                  <span className={classes.year}>{movie.fields.year}</span>
                )}
              </div>
              <hr className={classes.divider} />
              <Typography className={classes.sectionLabel} component="span">
                The review
              </Typography>
              <Typography className={classes.reviewBody} variant="body1">
                {movie.fields.review}
              </Typography>
              <hr className={classes.divider} />
              <div className={classes.actions}>
                <Typography variant="body2" className={classes.actionsHint}>
                  Changed your mind on this one? Remove it to draft a fresh take.
                </Typography>
                <DeleteButton page="FullCard" setToggle={setToggle} id={movie.id} />
              </div>
            </div>
          </div>
        ) : (
          <Paper elevation={0} className={classes.emptyState}>
            <Typography variant="h6">We couldn’t find that film.</Typography>
            <Typography variant="body2">
              It may have been removed or never existed. Head back home to browse the
              latest reviews.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
              Back home
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default FullCard;
