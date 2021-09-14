import { RatingView } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'

export default function UserReviews(props) {
  const { reviews } = props

  return (
    <>
      {reviews !== null ?
        <>
          {reviews.length > 0 ?
            <>
              <div className="reviews-container">
                {reviews.map((review, index) => (
                  <>
                    <div className="review-container" key={index}>
                      <Link className="review-link" to={`/restaurant/${review.restaurant.id}`}>
                        <p>{ review.restaurant.name }</p>
                      </Link>
                      <RatingView ratingValue={review.rating} size={25} />
                      <p>{ review.title }</p>
                      <p>{ review.description }</p>
                    </div>
                  </>
                ))}
              </div>
            </>
            :
            <>
              <div style={{textAlign: "center", color: "gray"}}>
                <p>Sorry, no reviews were made by this user just yet!</p>
              </div>
            </>
          }
        </>
        :
        null
      }

    </>
  )
}