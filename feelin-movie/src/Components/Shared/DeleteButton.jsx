import Button from "@material-ui/core/Button";
import axios from "axios";

const DeleteButton = ({ id }) => {
  const deleteMovie = () => {
    console.log('hello!')
    try {
    axios.delete('REACT_APP_AIRTABLE_URL' + `/${id}` + '?api_key=keyIJpj84p7L3fJJI');
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={deleteMovie} variant="contained">Delete</Button>;
};
export default DeleteButton;
