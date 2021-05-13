import Button from "@material-ui/core/Button";
import axios from "axios";
import { baseURL, config } from "../../services";

// create Delete component
// try/catch axios delete functionatlity
// pass ID prop to DeleteButton
// create onClick property to contained button 
const DeleteButton = ({ id, setToggle }) => {
  const deleteMovie = async () => {
    console.log("hello!");
      const movieURL = `${baseURL}/${id}`
      await axios.delete(movieURL, config
      );
      setToggle((curr) => !curr)
  }
  
  return (
    <Button onClick={deleteMovie} variant="contained">
      Delete
    </Button>
  );
};
export default DeleteButton;
