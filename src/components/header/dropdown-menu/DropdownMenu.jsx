import './DropdownMenu.css'

import {Link, useHistory} from 'react-router-dom'

export default function DropdownMenu(props) {
  const {currentUser, setCurrentUser} = props
  const history = useHistory()

  const handleLogout = () => {

    localStorage.removeItem("token")
    setCurrentUser(null)
    history.push("/")
  }
  return (
    <div className="dropdown-menu">
      <Link className="dropdown-item" to={`/user/${currentUser.username}`}>
        My account
      </Link>
      <button onClick={() => handleLogout()} style={{width: "100%", border: "none"}} className="dropdown-item">
        Log out
      </button>
    </div>
  )
}