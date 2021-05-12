import Button from "@material-ui/core/Button";
import axios from "axios";

const DeleteButton = ({ id }) => {
  const deleteMovie = async () => {
    console.log('hello!')
    try {
    await axios.delete('https://api.airtable.com/v0/appUCPrruUkAWe7yO/Table%201' + `/${id}` + '?api_key=keyIJpj84p7L3fJJI');
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={deleteMovie} variant="contained">Delete</Button>;
};
export default DeleteButton;
