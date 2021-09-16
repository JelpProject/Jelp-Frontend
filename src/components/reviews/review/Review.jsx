import { RatingView } from 'react-simple-star-rating'
import './Review.css'
import { Link } from 'react-router-dom'

export default function Review(props) {
  const { data } = props

  return (
    <>
      <div className="review-container">
        <Link className="review-link" to={`/user/${data.member.username}`}>
          <div>
            <label>{data.member.fname} {data.member.lname}</label>
          </div>
        </Link>
        <Link className="review-link" to={`/restaurant/${data.restaurantId}`}>
          <div>
            <p>{ data.restaurant.name}</p>
          </div>
        </Link>
        <div>
          <RatingView ratingValue={data.rating} size={25}/>
        </div>
        <div>
          <h3>{data.headline}</h3>
          <p>{ data.detail }</p>
        </div>
      </div>
    </>
  )
}