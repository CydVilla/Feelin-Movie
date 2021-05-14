import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { baseURL, config } from "../../services";
import { useHistory } from "react-router-dom";


// create Delete component
// try/catch axios delete functionatlity
// pass ID prop to DeleteButton
// create onClick property to contained button 

const DeleteButton = ({ id, setToggle, page }) => {
  let history = useHistory()
  const deleteMovie = async () => {
    console.log("hello!");
      const movieURL = `${baseURL}/${id}`
      await axios.delete(movieURL, config
    ); if (page == 'FullCard') {
        history.push('/')
      }
      setToggle((curr) => !curr)
  }
  
  return (
    <Grid container justify='center'>
      <Grid item>
        <Button onClick={deleteMovie} variant="contained">
          Delete
    </Button>
    </Grid>
    </Grid>
  );
};
export default DeleteButton;
