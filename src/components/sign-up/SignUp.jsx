import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUser, authenticate, verify } from '../service/Service'

import Icon from '../icon/Jelp.png'

export default function SignUp(props) {
  const { setCurrentUser } = props

  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    retypedPassword: ""
  })

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      delete newUser.retypedPassword
      await createUser(newUser)
      const signedUser = {
        username: newUser.username,
        password: newUser.password
      }
      const token = await authenticate(signedUser)
      localStorage.setItem("token", JSON.stringify(token.data))
      const res = await verify()
      setCurrentUser(res)
      props.history.push("/")

    } catch (error) {
      console.log(error)
      setNewUser({
        fname: "",
        lname: "",
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

        <Link style={{textDecoration: "none"}} to="/">
          <div className="sign-title">
            <h1>Jelp</h1>
            <h3>Where weekends are spent!</h3>
          </div>
        </Link>


      <div className="sign-form-container">

        <div >
          {/* form section */}
          <form className="sign-form" onSubmit={handleSubmit}>
            <label className="sign-title" style={{ fontSize: "20px" }}>Sign Up</label>
            <label className="sign-title" style={{ fontSize: "15px" }}>It's free!</label>
            
            <input
              className="sign-input"
              placeholder="First Name"
              name="fname"
              type="text"
              value={newUser.fname}
              onChange={handleChange}
            />
              
            <input
              className="sign-input"
              placeholder="Last Name"
              name="lname"
              type="text"
              value={newUser.lname}
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
              name="retypedPassword"
              type="password"
              value={newUser.retypePassword}
              onChange={handleChange}
            />
              
            <button className="css-button-sliding-to-left--sky">Create Account</button>
          </form>
          
          <p>Have an account? <Link className="sign-link" to="/signin">Sign In</Link></p>

        </div>

        <Link style={{alignSelf: "flex-start"}} to="/">
          <div className="sign-icon-container">
            <img alt="header icon" src={ Icon } width="300" height="100"/>
          </div>
        </Link>

      </div>
      <div style={{height: "100px"}}></div>
    </div>  
  </>
  )
}