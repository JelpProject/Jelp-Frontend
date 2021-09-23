import { useEffect, useState } from 'react'
import Header from '../header/Header'
import Carousel from '../carousel/Carousel'
import Reviews from '../reviews/Reviews'

import { getAllRestaurants, getReviews } from '../service/Service'

export default function Home(props) {
  const { currentUser, setCurrentUser } = props

  const [carouselList, setCarouselList] = useState([])
  const [reviewList, setReviewList] = useState([])
  
  const currentUserExists = () => {
    if (currentUser != null) {
      return (
        <>
          <h1 style={{textAlign: "center"}}>Welcome { currentUser.fname }</h1>
        </>
      )
    }
  }

  const getRestaurantsData = async () => {
    
    const list = await getAllRestaurants()
    const slicedList = list.data.slice(0, 5)
    setCarouselList(slicedList)
  }

  const getReviewData = async () => {
    
    const list = await getReviews()
    const slicedList = list.data.slice(-6)
    setReviewList(slicedList)
  }

  useEffect(() => {
    getRestaurantsData()
    getReviewData()
  },[])

  return (
    <div>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <br />
      {currentUserExists()}
      <Carousel list={ carouselList }/>
      <br />
      <Reviews list={ reviewList }/>
    </div>
  )
}