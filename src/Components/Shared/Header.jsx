import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "linear-gradient(180deg, #2c3440 0%, #1c252c 100%)",
    boxShadow: "0 1px 0 rgba(120, 140, 160, 0.14), 0 12px 30px rgba(0, 0, 0, 0.35)",
    borderBottom: "1px solid rgba(120, 140, 160, 0.12)",
  },
  toolbar: {
    width: "min(1180px, 100%)",
    margin: "0 auto",
    padding: theme.spacing(1.5, 2.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(2),
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    textDecoration: "none",
    color: "inherit",
  },
  dots: {
    display: "inline-flex",
    alignItems: "center",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    display: "inline-block",
    boxShadow: "0 0 0 2px #1c252c",
  },
  dotGreen: { backgroundColor: theme.accents.green, marginRight: -5 },
  dotBlue: { backgroundColor: theme.accents.blue, marginRight: -5 },
  dotOrange: { backgroundColor: theme.accents.orange },
  brandText: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: 800,
    letterSpacing: "0.01em",
    lineHeight: 1.1,
    textTransform: "lowercase",
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: "0.72rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },
  ctaButton: {
    borderRadius: 6,
    paddingInline: theme.spacing(2.25),
    paddingBlock: theme.spacing(0.9),
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
}));

const Header = ({ setToggle }) => {
  const classes = useStyles();
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  const handleOpenMovieModal = () => setIsMovieModalOpen(true);
  const handleCloseMovieModal = () => setIsMovieModalOpen(false);

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="sticky" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.brand} aria-label="Feelin' Movie home">
            <span className={classes.dots} aria-hidden="true">
              <span className={`${classes.dot} ${classes.dotGreen}`} />
              <span className={`${classes.dot} ${classes.dotBlue}`} />
              <span className={`${classes.dot} ${classes.dotOrange}`} />
            </span>
            <span className={classes.brandText}>
              <Typography variant="h6" className={classes.title}>
                feelin' movie
              </Typography>
              <Typography variant="body2" className={classes.subtitle}>
                Your film journal
              </Typography>
            </span>
          </Link>
          <Button
            onClick={handleOpenMovieModal}
            color="primary"
            variant="contained"
            endIcon={<AddRoundedIcon />}
            className={classes.ctaButton}
          >
            Log a film
          </Button>
          <Modal
            onReviewCreated={() => setToggle((curr) => !curr)}
            handleCloseMovieModal={handleCloseMovieModal}
            isMovieModalOpen={isMovieModalOpen}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
