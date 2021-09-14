import { RatingView } from 'react-simple-star-rating'
import './Review.css'
import { Link } from 'react-router-dom'

export default function Review(props) {
  const { data } = props

  return (
    <>
      <div className="review-container">
        <Link className="review-link" to={`/user/${data.username}`}>
          <div>
            <label>{data.firstName} {data.lastName}</label>
          </div>
        </Link>
        <Link className="review-link" to={`/restaurant/${data.review.restaurant.id}`}>
          <div>
            <p>{ data.review.restaurant.name}</p>
          </div>
        </Link>
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