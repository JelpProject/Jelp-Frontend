import React from 'react'
import { Route } from 'react-router-dom'

import Home from './home/Home'
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp'

export default function Main(props) {

  const { currentUser, setCurrentUser } = props

  return (
    <main>

      <Route exact path="/">
        <Home currentUser={ currentUser } />
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
              
    </main>
  )
}