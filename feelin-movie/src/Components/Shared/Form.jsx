import { useState } from "react";
import axios from "axios";

// Don't import React

const Form = () => {
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
    // console.log(process.env.REACT_APP_API_KEY);
    // console.log(process.env.REACT_APP_AIRTABLE_KEY);
    // console.log(newReview)
    // await axios
    //   .post(process.env.REACT_APP_API_KEY, { fields: newReview })
    //   .catch((err) => console.log(err));
  };
  try {
  await axios.post(process.env.REACT_APP_API_KEY, { fields: newReview });
 } catch (err) {
   console.error(err);
 }
 // trycatch 
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
