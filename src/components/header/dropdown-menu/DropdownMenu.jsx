import './DropdownMenu.css'

import {Link} from 'react-router-dom'

export default function DropdownMenu(props) {
  const {currentUser} = props

  return (
    <div className="dropdown-menu">
      {currentUser != null ?
        <>
          <p>My account</p>
          <p>Settings</p>
          <p>Log out</p>
        </>
        :
        <>
          <Link className="dropdown-item" to="/signin">
            Sign In
          </Link>
          <Link className="dropdown-item" to="/signup">
            Sign Up
          </Link>
        </>
      }
    </div>
  )
}