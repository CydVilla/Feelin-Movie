import Button from "@material-ui/core/Button";
import axios from "axios";

// create Delete component
// try/catch axios delete functionatlity
// pass ID prop to DeleteButton
// create onClick property to contained button 
const DeleteButton = ({ id }) => {
  const deleteMovie = () => {
    console.log("hello!");
    try {
      axios.delete(
        `${process.env.REACT_APP_AIRTABLE_URL}` +
          `/${id}` +
          "?api_key=" +
          `${process.env.REACT_APP_AIRTABLE_KEY}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button onClick={deleteMovie} variant="contained">
      Delete
    </Button>
  );
};
export default DeleteButton;
