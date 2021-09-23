import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { getUserByUsername } from '../service/Service'

import './UserPage.css'

import Header from '../header/Header'
import UserReviews from './user-reviews/UserReviews'

export default function UserPage(props) {
  const { currentUser, setCurrentUser } = props
  
  const [userOnPage, setUserOnPage] = useState({
    currentUser: false,
    user: {}
  })

  const getUserData = async (username) => {
    const user = await getUserByUsername(username)

    if (currentUser !== null) {
      setUserOnPage({
        currentUser: currentUser.username === user.data.username,
        user: user.data
      })
    } else {
      setUserOnPage({
        currentUser: false,
        user: user.data
      })
    }
  }

  useEffect(() => {

    const currentUserOnPage = props.match.params.username
    getUserData(currentUserOnPage)

  },[props.match.params.username])

  return (
    <>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <div className="userpage-name-container">
        <FontAwesomeIcon icon={faUserCircle} size="3x" />
        <div>
          <h3>{userOnPage.user.fname} {userOnPage.user.lname}</h3>
          <h4>{userOnPage.user.username}</h4>
        </div>
        {
          userOnPage.currentUser &&
          <>
            <button className="css-button-sliding-to-left--grey">
              Update Account
            </button>
          </>
        }
      </div>

      {userOnPage.user.reviews !== undefined &&
        <>
          <UserReviews reviews={userOnPage.user.reviews} />
        </>
      }
      
    </>
  )
}