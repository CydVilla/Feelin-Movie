import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../../services";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  shell: {
    width: "100%",
    padding: theme.spacing(6, 0, 8),
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "min(920px, 100%)",
    display: "grid",
    gap: theme.spacing(4),
    paddingInline: theme.spacing(2),
  },
  headline: {
    fontWeight: 600,
    letterSpacing: "-0.02em",
  },
  card: {
    background: "linear-gradient(160deg, rgba(15, 23, 42, 0.94), rgba(17, 24, 39, 0.88))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "0 38px 72px rgba(15, 23, 42, 0.5)",
  },
  header: {
    padding: theme.spacing(3, 3, 1.5, 3),
  },
  headerTitle: {
    fontWeight: 600,
    color: theme.palette.text.primary,
    letterSpacing: "-0.01em",
  },
  headerSubheader: {
    color: theme.palette.text.secondary,
  },
  avatar: {
    background: "linear-gradient(135deg, #6366f1, #22d3ee)",
    color: "#0f172a",
    fontWeight: 700,
  },
  media: {
    height: 0,
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.96)",
  },
  content: {
    padding: theme.spacing(3, 3, 0, 3),
    display: "grid",
    gap: theme.spacing(1.75),
  },
  sectionLabel: {
    color: theme.palette.secondary.main,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontSize: "0.75rem",
  },
  reviewBody: {
    color: theme.palette.text.secondary,
    fontSize: "1.05rem",
    lineHeight: 1.9,
  },
  actions: {
    padding: theme.spacing(0, 3, 3, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(2),
  },
  actionsHint: {
    color: "rgba(148, 163, 184, 0.78)",
  },
  emptyState: {
    padding: theme.spacing(5),
    borderRadius: 24,
    textAlign: "center",
    background: "rgba(15, 23, 42, 0.68)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    color: theme.palette.text.secondary,
    display: "grid",
    gap: theme.spacing(1.5),
    boxShadow: "0 30px 60px rgba(15, 23, 42, 0.4)",
  },
}));

// Create FullCard component
// Create hooks
// axios.get API utilizing useParams method
// Create useEffect, try/catch statement
// pass destructured useParams prop into FullCard function
// Using JSX syntax wrap {movie && (...)} around movie object api data
// add ID property to Delete Button to allow deleltion of reviews

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
      setError("We couldn't load this review right now.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  const movie = movies.find((movie) => {
    return movie.id === currentURL.id;
  });
  const posterFallback =
    "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80";
  return (
    <div className={classes.shell}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.headline}>
          Latest review
        </Typography>
        {isLoading ? (
          <Paper elevation={0} className={classes.emptyState}>
            <CircularProgress color="secondary" />
            <Typography variant="body2">
              Fetching the full review...
            </Typography>
          </Paper>
        ) : error ? (
          <Paper elevation={0} className={classes.emptyState}>
            <Typography variant="h6">We couldn't load that review.</Typography>
            <Typography variant="body2">
              {error} Please try again in a moment.
            </Typography>
            <Button variant="outlined" color="primary" onClick={fetchMovies}>
              Retry
            </Button>
          </Paper>
        ) : movie ? (
          <Card className={classes.card} elevation={0}>
            <CardHeader
              classes={{ root: classes.header, title: classes.headerTitle, subheader: classes.headerSubheader }}
              avatar={
                <Avatar aria-label="movie" className={classes.avatar}>
                  {movie.fields.title ? movie.fields.title[0] : "F"}
                </Avatar>
              }
              title={movie.fields.title}
              subheader={movie.fields.year}
            />
            <CardMedia
              className={classes.media}
              image={movie.fields.imageURL || posterFallback}
              title="Movie artwork"
              aria-label={`${movie.fields.title || "Movie"} artwork`}
            />
            <CardContent className={classes.content}>
              <Typography className={classes.sectionLabel} component="span">
                Review
              </Typography>
              <Typography className={classes.reviewBody} variant="body1">
                {movie.fields.review}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Typography variant="body2" className={classes.actionsHint}>
                Want to refresh this take? Remove it to draft something new.
              </Typography>
              <DeleteButton
                page="FullCard"
                setToggle={setToggle}
                id={movie.id}
              />
            </CardActions>
          </Card>
        ) : (
          <Paper elevation={0} className={classes.emptyState}>
            <Typography variant="h6">We couldn’t find that film.</Typography>
            <Typography variant="body2">
              It may have been removed or never existed. Head back home to browse the latest reviews.
            </Typography>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default FullCard;
