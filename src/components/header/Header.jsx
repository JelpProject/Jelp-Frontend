import './Header.css'

import SearchPage from './search-page/SearchPage'
import DropdownButton from './dropdown-button/DropdownButton'
import Icon from '../icon/Jelp.png'

export default function Header(props) {
  const {currentUser} = props

  return (
    <>
      <div className='header-container'>
        <div className='header-icon'>
          <img src={ Icon } width="300px" height="100px"/>
        </div>

        <div className="header-searchbar">
          {/* searchbar */}
          <SearchPage />
        </div>

        <div className='header-menu-button'>
          <DropdownButton currentUser={currentUser}/>
        </div>
      </div>
    </>
  )
}