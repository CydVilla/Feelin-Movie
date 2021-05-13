import { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { useParams } from "react-router-dom"
import {baseURL, config} from "../../services"



// Create FullCard component 
// Create hooks
// axios.get API utilizing useParams method
// Create useEffect, try/catch statement 
// pass destructured useParams prop into FullCard function
// Using JSX syntax wrap {movie && (...)} around movie object api data
// add ID property to Delete Button to allow deleltion of reviews

const FullCard = ({ }) => {
  const currentURL = useParams();
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config)
      setMovies(resp.data.records)
    }
    getData()
  }, []);
  const movie = movies.find((movie) => {
    return (
      movie.id === currentURL.id
    )
  })
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
