import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./MovieCard.css";


// create MovieCard component, pass in deconstructed movie prop
// wrap contents of the first <div> into an <a> to allow the movie card to render clickable MovieCard(s)

const MovieCard = ({ movie }) => {
  const { title, year, review, imageURL } = movie.fields;
  const excerpt = review && review.length > 120 ? `${review.slice(0, 120)}…` : review;
  const posterFallback =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80";

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="MovieCard" elevation={0}>
        <CardActionArea component={Link} to={`/movie/${movie.id}`} className="MovieCard__action">
          <div className="MovieCard__mediaWrapper">
            <CardMedia
              className="MovieCard__media"
              image={imageURL || posterFallback}
              title={title}
            />
            <div className="MovieCard__meta">
              {year && <span className="MovieCard__meta-year">{year}</span>}
              <span className="MovieCard__meta-cta">Read review</span>
            </div>
          </div>
          <CardContent className="MovieCard__content">
            <Typography variant="h6" className="MovieCard__title">
              {title}
            </Typography>
            {excerpt && (
              <Typography variant="body2" className="MovieCard__excerpt" color="textSecondary">
                {excerpt}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MovieCard;
