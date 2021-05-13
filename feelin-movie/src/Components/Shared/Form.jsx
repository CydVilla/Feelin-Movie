import { useState } from "react";
import {baseURL, config} from "../../services"
import axios from "axios";

// Create Form component 
// create hooks for API data
// handleSubmit function
// try/catch axios.post() to upload data (newReview) on Form via browser to database


const Form = ({toggle, setToggle}) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      title,
      year,
      review,
      imageURL,
    };
    await axios.post(baseURL, { fields: newReview }, config);
    setToggle((curr) => !curr)  
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="year">Year: </label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.valueAsNumber)}
      />
      <label htmlFor="review">Review: </label>
      <input
        type="text"
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <label htmlFor="imageURL">imageURL: </label>
      <input
        type="text"
        id="imageURL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default Form;
