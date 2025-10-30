import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Modal from "./Modal";

// https://material-ui.com/components/app-bar/https://material-ui.com/components/app-bar/
// create hooks, => create open/close functions => set to true false, respectively
// update return with created variables

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgba(15, 23, 42, 0.78)",
    boxShadow: "0 18px 36px rgba(15, 23, 42, 0.45)",
    borderBottom: "1px solid rgba(148, 163, 184, 0.14)",
    backdropFilter: "blur(14px)",
  },
  toolbar: {
    width: "min(1200px, 100%)",
    margin: "0 auto",
    padding: theme.spacing(2, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(3),
  },
  branding: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),
  },
  title: {
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: "0.95rem",
  },
  ctaButton: {
    borderRadius: 999,
    paddingInline: theme.spacing(2.5),
    paddingBlock: theme.spacing(1.2),
    fontWeight: 600,
    boxShadow: "0 22px 44px rgba(99, 102, 241, 0.35)",
  },
}));

const Header = ({ toggle, setToggle }) => {
  const classes = useStyles();
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  const handleOpenMovieModal = () => {
    setIsMovieModalOpen(true);
  };

  const handleCloseMovieModal = () => {
    setIsMovieModalOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="sticky" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.branding}>
            <Typography variant="h6" className={classes.title}>
              Feelin' Movie
            </Typography>
            <Typography variant="body2" className={classes.subtitle}>
              Discover, review, and revisit the films that moved you.
            </Typography>
          </div>
          <Button
            onClick={handleOpenMovieModal}
            color="primary"
            variant="contained"
            endIcon={<AddRoundedIcon />}
            className={classes.ctaButton}
          >
            Add review
          </Button>
          <Modal
            toggle={toggle}
            setToggle={setToggle}
            handleCloseMovieModal={handleCloseMovieModal}
            isMovieModalOpen={isMovieModalOpen}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
