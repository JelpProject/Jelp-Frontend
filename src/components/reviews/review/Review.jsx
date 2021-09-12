import { RatingView } from 'react-simple-star-rating'
import './Review.css'

export default function Review(props) {
  const { data } = props

  return (
    <>
      <div className="review-container">
        <div>
          <label>{data.firstName} {data.lastName}</label>
        </div>
        <div>
          <p>{ data.review.restaurant.name}</p>
        </div>
        <div>
          <RatingView ratingValue={data.review.rating} size={25}/>
        </div>
        <div>
          <h3>{data.review.title}</h3>
          <p>{ data.review.description }</p>
        </div>
      </div>
    </>
  )
}