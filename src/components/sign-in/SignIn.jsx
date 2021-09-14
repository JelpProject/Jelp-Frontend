import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import Icon from '../icon/Jelp.png'
import SampleData from '../sample-data/SampleSingleUser'


export default function SignIn(props) {

  const { setCurrentUser } = props

  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  })

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
      // SampleData is for testing purposes
      if (newUser.username === SampleData.username && newUser.password === SampleData.password) {
        setCurrentUser(SampleData)
      }
      props.history.push("/")

    } catch (error) {
      console.log(error)
    }
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

          <Link style={{alignSelf: "flex-start"}} to="/">
            <div className="sign-icon-container">
              <img alt="header icon" src={ Icon } width="300" height="100"/>
            </div>
          </Link>

        </div>

      </div>  
    </>
  )
}