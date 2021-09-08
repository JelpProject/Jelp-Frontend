import React from 'react'
import { Route } from 'react-router-dom'

import SignIn from './sign-in/SignIn'
import Home from './home/Home'

export default function Main(props) {

  const { currentUser, setCurrentUser } = props

  return (
    <main>

      {/* render={(props)} allows us to use .history() */}
      <Route exact path="/log" render={(props) => (
        <SignIn
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route exact path="/">
        <Home currentUser={ currentUser } />
      </Route>
              
    </main>
  )
}