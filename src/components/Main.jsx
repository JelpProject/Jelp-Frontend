import { Route } from 'react-router-dom'

import Home from './home/Home'
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp'
import UserPage from './user-page/UserPage'
import RestaurantPage from './restaurant-page/RestaurantPage'

export default function Main(props) {

  const { currentUser, setCurrentUser } = props

  return (
    <main>

      <Route exact path="/">
        <Home
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </Route>

      {/* render={(props)} allows us to use .history() */}
      <Route exact path="/signin" render={(props) => (
        <SignIn
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route exact path="/signup" render={(props) => (
        <SignUp
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route exact path={`/user/:username`} render={(props) => (
        <UserPage
          {...props}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )} />
      
      <Route exact path={`/restaurant/:id`} render={(props) => (
        <RestaurantPage
          {...props}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) }/>
              
    </main>
  )
}