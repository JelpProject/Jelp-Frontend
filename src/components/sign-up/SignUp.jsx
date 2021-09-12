import { useState } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../icon/Jelp.png'

export default function SignUp(props) {
  const { setCurrentUser } = props

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    retypedPassword: ""
  })

  const handleSubmit = e => {
    e.preventDefault()

    try {
      delete newUser.retypedPassword
      setCurrentUser(newUser)
      props.history.push("/")

    } catch (error) {
      console.log(error)
      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        retypedPassword: ""
      })
    }

  }

  const handleChange = e => {
    const { name, value } = e.target
    
    setNewUser({
      ...newUser,
      [name]: value
    })
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
            <label className="sign-title" style={{ fontSize: "20px" }}>Sign Up</label>
            <label className="sign-title" style={{ fontSize: "15px" }}>It's free!</label>
            
            <input
              className="sign-input"
              placeholder="First Name"
              name="firstName"
              type="text"
              value={newUser.firstName}
              onChange={handleChange}
            />
              
            <input
              className="sign-input"
              placeholder="Last Name"
              name="lastName"
              type="text"
              value={newUser.lastName}
              onChange={handleChange}
            />
              
            <input
              className="sign-input"
              placeholder="Email"
              name="email"
              type="email"
              value={newUser.email}
              onChange={handleChange}
            />
              
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
            <input
              className="sign-input"
              placeholder="Retype Password"
              name="retypePassword"
              type="password"
              value={newUser.retypePassword}
              onChange={handleChange}
            />
              
            <button className="css-button-sliding-to-left--sky">Create Account</button>
          </form>
          
          <p>Have an account? <Link className="sign-link" to="/signin">Sign In</Link></p>

        </div>

        <div className="sign-icon-container">
          <img src={ Icon } width="300" height="100"/>
        </div>

      </div>
      <div style={{height: "100px"}}></div>
    </div>  
  </>
  )
}