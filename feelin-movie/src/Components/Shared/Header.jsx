import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "./Modal"


// https://material-ui.com/components/app-bar/https://material-ui.com/components/app-bar/
// create hooks, => create open/close functions => set to true false, respectively 
// update return with created variables


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = () => {
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
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Feelin' Movie
            </Typography>
          <Button onClick={handleOpenMovieModal} color="inherit">Add Review</Button>
          <Modal handleCloseMovieModal={handleCloseMovieModal} isMovieModalOpen={ isMovieModalOpen}/>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default Header;
