import React from 'react'

export default function Home(props) {
  const { currentUser } = props
  
  const currentUserExists = () => {
    if (currentUser != null) {
      return (
        <>
          <h1>Welcome { currentUser.firstName }</h1>
        </>
      )
    }
  }

  return (
    <div>
      <h1>This is the Home component</h1>
      {currentUserExists()}
    </div>
  )
}