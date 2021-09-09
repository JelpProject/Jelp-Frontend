import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import Icon from '../icon/Jelp.png'


export default function SignIn(props) {

  // testing data
  const userOne = {
    id: 1,
    firstName: "Jotaro",
    lastName: "Kujo",
    email: "yareyaredaze@email.com",
    username: "notDio",
    password: 'notDio'
  }

  const { setCurrentUser } = props

  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setNewUser({
      ...newUser,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    try {

      if (newUser.username === userOne.username && newUser.password === userOne.password) {
        setCurrentUser(userOne)
      }
      props.history.push("/")

    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  
  return (
    <>
      <div className="sign-container">

        <div className="sign-title">
          <h1>Jelp</h1>
          <h3>Where weekends are spent!</h3>
        </div>

        <div className="sign-form-container">

          <div >
            {/* form section */}
            <form className="sign-form" onSubmit={handleSubmit}>
              <label className="sign-title" style={{fontSize: "20px"}}>Log in</label>
              <input
                className="sign-input"
                placeholder="Username"
                name="username"
                type="text"
                value={newUser.username}
                onChange={handleChange}
              />
              <input
                className="sign-input"
                placeholder="Password"
                name="password"
                type="password"
                value={newUser.password}
                onChange={handleChange}
              />
              <button className="css-button-sliding-to-left--sky">Sign In</button>
            </form>

            <p>Don't have an account? <Link className="sign-link" to="/signup">Sign Up</Link></p>
          </div>

          <div className="sign-icon-container">
            <img src={ Icon } width="300" height="100"/>
          </div>

        </div>

      </div>  
    </>
  )
}