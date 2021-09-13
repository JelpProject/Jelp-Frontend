import { useEffect, useState } from 'react'

import './EditRestaurant.css'

export default function EditRestaurant(props) {
  const { restaurant, setRestaurant } = props

  const [restaurantData, setRestaurantData] = useState({
    name: "",
    address: "",
    phone: "",
    description: ""
  })

  useEffect(() => {
    defaultData()
  }, [])

  const defaultData = () => {
    if (restaurant !== null) {
      setRestaurantData({
        name: restaurant.name,
        address: restaurant.address,
        phone: restaurant.phone,
        description: restaurant.description
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    // PUT request goes here

    // update restaurant with what response we get
    // setRestaurant()

  }

  const handleChange = e => {
    const { name, value } = e.target
    setRestaurantData({
      [name]: value
    })
  }

  return (
    <>
      <div className="edit-restaurant-container">
        <h3>Edit Restaurant Settings: </h3>
        <form onSubmit={handleSubmit} className="sign-form">
          <input
            className="sign-input"
            placeholder="Name"
            name="name"
            value={restaurantData.name}
            type="text"
            onChange={handleChange}
          />
          <input
            className="sign-input"
            placeholder="Address"
            name="address"
            value={restaurantData.address}
            type="text"
            onChange={handleChange}
          />
          <input
            className="sign-input"
            placeholder="Phone"
            name="phone"
            value={restaurantData.phone}
            type="text"
            onChange={handleChange}
          />
          <textarea
            className="sign-input"
            placeholder="Description"
            maxLength="200"
            name="description"
            value={restaurantData.description}
            type="text"
            onChange={handleChange}
          />
          <button className="css-button-sliding-to-left--grey">Submit</button>
        </form>

      </div>
    </>
  )
}