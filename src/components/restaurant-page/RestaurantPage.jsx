import { useEffect, useState } from 'react'
import SampleRestaurant from '../sample-data/SampleRestaurant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import RestaurantReviews from './restaurant-reviews/RestaurantReviews'

import Header from '../header/Header'

export default function RestaurantPage(props) {
  const { currentUser, setCurrentUser } = props
  
  const [restaurant, setRestaurant] = useState(null)

  const filterByRestaurant = (id) => {

    const restaurant = SampleRestaurant.filter(res => {
      return res.id === parseInt(id)
    })
    return restaurant[0]
  }

  useEffect(() => {

    const currentRestaurantId = props.match.params.id

    setRestaurant(filterByRestaurant(currentRestaurantId))

  },[props.match.params.id])

  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />

      {restaurant !== null &&
        <>
          <div className="userpage-name-container">
            <FontAwesomeIcon style={{ paddingRight: "15px" }} icon={faUtensils} size="4x" />
            <div>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.phone} </p>
              <label>{restaurant.address}, {restaurant.city.name}, {restaurant.city.cityState.state}</label>
            </div>
          </div>
        
          <RestaurantReviews reviews={restaurant.reviews} />
        </>
      }
    </>
  )
}