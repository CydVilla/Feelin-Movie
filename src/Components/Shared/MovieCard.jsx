import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { title, year, review, imageURL } = movie.fields;
  const excerpt = review && review.length > 110 ? `${review.slice(0, 110)}…` : review;
  const posterFallback =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80";

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card className="MovieCard" elevation={0}>
        <CardActionArea component={Link} to={`/movie/${movie.id}`} className="MovieCard__action">
          <div className="MovieCard__poster">
            <CardMedia
              component="img"
              className="MovieCard__media"
              image={imageURL || posterFallback}
              title={title}
              alt={`${title} poster`}
            />
            <div className="MovieCard__overlay">
              <span className="MovieCard__cta">Read review</span>
            </div>
          </div>
          <CardContent className="MovieCard__content">
            <div className="MovieCard__titleRow">
              <Typography variant="subtitle1" className="MovieCard__title">
                {title}
              </Typography>
              {year && <span className="MovieCard__year">{year}</span>}
            </div>
            {excerpt && (
              <Typography variant="body2" className="MovieCard__excerpt">
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
