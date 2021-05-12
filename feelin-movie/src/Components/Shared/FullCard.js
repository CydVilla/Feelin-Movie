import { useEffect, useState } from "react"
import axios from "axios"
import DeleteButton from "./DeleteButton"

const FullCard = () => {
  const [movie, setMovie] = useState('')
  useEffect( async () => {
    const currentURL = window.location.href.split('/')
    console.log(currentURL[currentURL.length -1])
    try {
      await axios.get('https://api.airtable.com/v0/appUCPrruUkAWe7yO/Table%201' + `/${currentURL[currentURL.length -1]}` + '?api_key=' + `${process.env.REACT_APP_AIRTABLE_KEY}`).then(movie => setMovie(movie.data));
    } catch (err) {
      console.log(err)
    }
    
  }, []);
  return (
    <div> { movie && 
      <div>
        <div>
          <img src={movie.fields.imageURL} />
          <span>{movie.fields.title}</span>
        <span>{movie.fields.year}</span>
        <span>{movie.fields.review}</span>
        </div>
      <DeleteButton id={movie.id} />
      </div>
    }
    </div>
  );
}


export default FullCard