import { useState } from 'react'
import LeftArrow from './arrows/LeftArrow'
import RightArrow from './arrows/RightArrow'
import Slide from './slide/Slide'

import "./Carousel.css"

export default function Carousel(props) {
  const { list } = props

  const [activeIndex, setActiveIndex] = useState(0)

  const goToNextSlide = () => {

    let index = activeIndex
    let length = list.length

    if (index === length - 1) {
      index = 0
    } else {
      index++
    }

    setActiveIndex(index)
    
  }

  const goToPrevSlide = () => {

    let index = activeIndex
    let length = list.length

    if (index < 1) {
      index = length - 1
    } else {
      index--
    }
    
    setActiveIndex(index)
  }


  return (
    <>
      <div className="carousel-title">
        <h1>Explore new spots!</h1>
      </div>
      <div className="carousel-container">
        <LeftArrow goToPrevSlide={ goToPrevSlide}/>
        <Slide
          data={list}
          activeIndex={activeIndex}
        />
        <RightArrow goToNextSlide={goToNextSlide}/>
      </div>
    </>
  )
}