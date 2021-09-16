import FoodImages from '../../food-images/FoodImages'
import './Slide.css'
import { Link } from 'react-router-dom'

export default function Slide(props) {
  const { data, activeIndex } = props
  
  return (
    
    <section>
      {
        data.map((arr, index) => (
          <>
            <Link to={`/restaurant/${arr.restaurantId}`}>
              <div 
                className={index === activeIndex ? "active" : "inactive"}
                key={index}
              >
                <img
                  alt="food"
                  className="slide-image"
                  src={FoodImages[activeIndex]}
                />
                <div className="slide-text-container">
                  <h1 className="slide-text">{arr.name}</h1>
                </div>
              </div>
            </Link>
          </>
        ))
      }
    </section>
  )
}