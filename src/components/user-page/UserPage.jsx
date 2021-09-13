import { useState, useEffect } from 'react'
import SampleUser from '../sample-data/SampleUser'
import SampleSingleUser from '../sample-data/SampleSingleUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './UserPage.css'

import Header from '../header/Header'
import UserReviews from './user-reviews/UserReviews'

export default function UserPage(props) {
  const { currentUser, setCurrentUser } = props
  const [userOnPage, setUserOnPage] = useState({
    currentUser: false,
    user: {}
  })

  // only used for testing, will switch to a GET request
  const filterByCurrentUsername = (str) => {

    const user = SampleUser.filter(usr => {
      return usr.username === str
    })
    return user[0]
  }

  const isItCurrentUser = (username) => {
    // SampleSingleUser will become CurrentUser once it becomes stateful
    if (SampleSingleUser.username === username) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {

    const currentUserOnPage = props.match.params.username

    setUserOnPage({
      currentUser: isItCurrentUser(currentUserOnPage),
      user: filterByCurrentUsername(currentUserOnPage)
    })

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
          <h3>{userOnPage.user.firstName} {userOnPage.user.lastName}</h3>
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