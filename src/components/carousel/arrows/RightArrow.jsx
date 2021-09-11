import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import "./Arrow.css"

export default function LeftArrow(props) {
  const {goToNextSlide} = props

  return (
    <>
      <div className="arrow right-arrow">
        <FontAwesomeIcon
          onClick={() => goToNextSlide()}
          icon={faAngleRight}
          size="4x"
        />
      </div>
    </>
  )
}