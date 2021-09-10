import { useState, useEffect, useRef } from 'react'

import './DropdownButton.css'
import DropdownMenu from '../dropdown-menu/DropdownMenu'

export default function DropdownButton(props) {
  const {currentUser} = props
  const [display, setDisplay] = useState(false)

  // reference for outside clicks
  const node = useRef()

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // click inside the menu
      return
    }

    // click outside the menu
    setDisplay(false)
  }

  useEffect(() => {

    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <div className="dropdown" ref={node}>
      <button
        onClick={() => setDisplay(!display)}
      >
        Menu
      </button>

      {display &&
        <DropdownMenu currentUser={currentUser}/>
      }
    </div>
  )
}