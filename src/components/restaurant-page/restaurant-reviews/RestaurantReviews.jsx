import { RatingView } from "react-simple-star-rating"

export default function RestaurantReviews(props) {
  const {reviews} = props

  return (
    <>
      {reviews !== null ?
        <>
          {reviews.length > 0 ?
            <>
              <div className="reviews-container">
                {reviews.map((review, index) => (
                  <>
                    <div key={index} className="review-container">
                      <p>{review.user.firstName} { review.user.lastName }</p>
                      <RatingView ratingValue={review.rating} size={25} />
                      <p>{ review.headline }</p>
                      <p>{ review.detail }</p>
                    </div>
                  </>
                ))}
              </div>
            </>
            :
            <>
              <div style={{textAlign: "center", color: "gray"}}>
                <p>Sorry, no reviews were made to this restaurant just yet!</p>
              </div>
            </>
          }
        </>
        :
        <>
        </>
      }
    </>
  )
}