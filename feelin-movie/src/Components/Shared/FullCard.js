import { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const FullCard = ({ useParams }) => {
  const [movie, setMovie] = useState("");
  const currentURL = useParams();
  useEffect( () => {
    try {
      const resp = axios.get(
        `${process.env.REACT_APP_AIRTABLE_URL}` +
          `/${currentURL}` +
          "?api_key=" +
          `${process.env.REACT_APP_AIRTABLE_KEY}`
      );
      setMovie(resp.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      {" "}
      {movie && (
        <div>
          <div>
            <img src={movie.fields.imageURL} />
            <span>{movie.fields.title}</span>
            <span>{movie.fields.year}</span>
            <span>{movie.fields.review}</span>
          </div>
          <DeleteButton id={movie.id} />
        </div>
      )}
    </div>
  );
};

export default FullCard;
