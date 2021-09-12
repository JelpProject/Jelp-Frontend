import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

export default function LeftArrow(props) {
  const { goToPrevSlide } = props

  return (
    <>
      <div className="arrow left-arrow">
        <FontAwesomeIcon
          onClick={() => goToPrevSlide()}
          icon={faAngleLeft}
          size="4x"
        />
      </div>
    </>
  )
}