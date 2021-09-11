import './DropdownMenu.css'

import {Link, useHistory} from 'react-router-dom'

export default function DropdownMenu(props) {
  const {setCurrentUser} = props
  const history = useHistory()

  const handleLogout = () => {

    setCurrentUser(null)
    history.push("/")
  }
  return (
    <div className="dropdown-menu">
      <Link className="dropdown-item" to="/">
        My account
      </Link>
      <Link className="dropdown-item" to="/">
        Settings
      </Link>
      <button onClick={() => handleLogout()} style={{width: "100%", border: "none"}} className="dropdown-item">
        Log out
      </button>
    </div>
  )
}