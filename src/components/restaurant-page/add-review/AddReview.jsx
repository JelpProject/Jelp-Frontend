import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function AddReview() {
  const [review, setReview] = useState({
    headline: "",
    detail: ""
  })
  const [rating, setRating] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()

    // Post request needs userID and restaurantID to connect it together
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setReview({
      ...review,
      [name]: value
    })
  }

  const handleRating = (rate) => {
    setRating(rate)
  }
  
  return (
    <>
      <div className="edit-restaurant-container">
        <h3>Add Restaurant Review: </h3>
        <form onSubmit={handleSubmit} className="sign-form">
          <input
            className="sign-input"
            placeholder="Headline"
            name="headline"
            value={review.headline}
            type="text"
            onChange={handleChange}
          />
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={20}
            transition
            fillColor="orange"
            emptyColor="gray"
            name="rating"
          />
          <br />
          <textarea
            className="sign-input"
            placeholder="Description"
            maxLength="200"
            name="detail"
            value={review.detail}
            type="text"
            onChange={handleChange}
          />
          <button className="css-button-sliding-to-left--grey">Submit</button>
        </form>

      </div>
    </>
  )
}