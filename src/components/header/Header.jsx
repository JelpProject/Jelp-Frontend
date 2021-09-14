import './Header.css'

import {Link} from 'react-router-dom'

import SearchPage from './search-page/SearchPage'
import DropdownButton from './dropdown-button/DropdownButton'
import Icon from '../icon/Jelp.png'

export default function Header(props) {
  const {currentUser, setCurrentUser} = props

  return (
    <>
      <div className='header-container'>
        <Link style={{alignSelf: "stretch"}} to="/">
          <div className='header-icon'>
            <img alt="header icon" src={ Icon } width="300px" height="100px"/>
          </div>
        </Link>

        <div className="header-searchbar">
          {/* searchbar */}
          <SearchPage />
        </div>

        <div className='header-menu-button'>
          {currentUser != null ?
            <>
              <DropdownButton
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
            :
            <>
              <div className="notlogged-container">
                <Link style={{ marginRight: "15px"}} className="notlogged-item css-button-sliding-to-top--black" to="/signin">
                  Log In
                </Link>
                <Link className="notlogged-item css-button-sliding-to-top--black" to="/signup">
                  Sign Up
                </Link>
              </div>
            </>
          }

        </div>
      </div>
    </>
  )
}