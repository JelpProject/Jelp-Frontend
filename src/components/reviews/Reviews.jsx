import Review from "./review/Review"
import './Reviews.css'

export default function Reviews(props) {
  const {list} = props

  return (
    <>
      <div className="reviews-title">
        <h1>Recent Activity!</h1>
      </div>
      <div className="reviews-container">
        {
          list.map((data, index) => (
            <>
              <div className="reviews-spacing" key={index}>
                <Review data={data}/>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}