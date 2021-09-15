import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import SampleUser from '../sample-data/SampleSingleUser'
import SampleAdmin from '../sample-data/SampleSingleAdmin'
import SampleRestaurant from '../sample-data/SampleRestaurant'

import { getRestaurantsById } from '../service/Service'

import './RestaurantPage.css'

import Header from '../header/Header'
import RestaurantReviews from './restaurant-reviews/RestaurantReviews'
import EditRestaurant from './edit-restaurant/EditRestaurant'
import AddReview from './add-review/AddReview'

export default function RestaurantPage(props) {
  const { currentUser, setCurrentUser } = props
  
  const [restaurant, setRestaurant] = useState(null)
  // only check for whether user is an admin or not, cannot be changed in browser
  const [displayButton] = useState(false)
  const [displayEditSection, setDisplayEditSection] = useState(false)

  const [displayAddReview, setDisplayAddReview] = useState(false)

  const filterByRestaurant = (id) => {

    const restaurant = SampleRestaurant.filter(res => {
      return res.id === parseInt(id)
    })
    return restaurant[0]
  }

  const getRestaurant = async(id) => {

    const res = await getRestaurantsById(id)
    setRestaurant(res.data)

    // const res = filterByRestaurant(props.match.params.id)
    // setRestaurant(res)
  }

  useEffect(() => {

    const currentRestaurantId = props.match.params.id
    getRestaurant(currentRestaurantId)
 
  }, [props.match.params.id])
  
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
        
        {displayButton && currentUser !== null ?
          <>
            <div className="restaurant-page-button">
              <button
                  className="css-button-sliding-to-bottom--grey"
                  onClick={() => setDisplayEditSection(!displayEditSection)}>
                    Edit Restaurant
                </button>
            </div>              
            {displayEditSection ? 
              <>
                <EditRestaurant restaurant={restaurant} setRestaurant={ setRestaurant}/>
              </>
              :
              <>
                <RestaurantReviews reviews={restaurant.reviews} />
              </>
            }
          </>
          :
          <>
            <div className="restaurant-page-button">
              <button
                className="css-button-sliding-to-bottom--grey"
                onClick={() => setDisplayAddReview(!displayAddReview)}>
                  Add Review
              </button>
            </div>

            {displayAddReview ? 
              <>
                <AddReview currentUser={currentUser} restaurant={restaurant} setRestaurant={ setRestaurant}/>
              </>
              :
              <>
                <RestaurantReviews reviews={restaurant.reviews} />
              </>
            }
          </>
        }
        </>
        
      }
    </>
  )
}