import FoodImages from '../../food-images/FoodImages'
import './Slide.css'

export default function Slide(props) {
  const { data, activeIndex } = props
  
  return (
    
    <section>
      {
        data.map((arr, index) => (
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
        ))
      }
    </section>
  )
}