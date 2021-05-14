import { useEffect, useState } from "react";
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
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import "./FullCard.css";
import theme from "./theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  media: {
    paddingTop: "56.25%",
    backgroundSize: "contain",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
  headline: {
    fontSize: 40,
    padding: 40
  },
});

// Create FullCard component
// Create hooks
// axios.get API utilizing useParams method
// Create useEffect, try/catch statement
// pass destructured useParams prop into FullCard function
// Using JSX syntax wrap {movie && (...)} around movie object api data
// add ID property to Delete Button to allow deleltion of reviews

const FullCard = ({ toggle, setToggle }) => {
  const classes = useStyles();
  const currentURL = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setMovies(resp.data.records);
    };
    getData();
  }, []);
  const movie = movies.find((movie) => {
    return movie.id === currentURL.id;
  });
  return ( 
    <div className="background space">
        <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
        <Typography
                    className={classes.headline}
                    color="textSecondary"
                    gutterBottom
          > Latest Review
            </Typography>
            {movie && (
              <Card className={classes.root} variant="outlined">
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {movie.fields.title[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={movie.fields.title}
                  subheader={movie.fields.year}
                />
                <CardMedia
                  className={classes.media}
                  image={movie.fields.imageURL}
                  title="Movie Image"
                />
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="primary"
                    gutterBottom
                  >
                    Review
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {movie.fields.review}
                  </Typography>
                  <CardActions>
                    <DeleteButton
                      page="FullCard"
                      setToggle={setToggle}
                      id={movie.id}
                    />
                  </CardActions>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </div>
  );
};

export default FullCard;


