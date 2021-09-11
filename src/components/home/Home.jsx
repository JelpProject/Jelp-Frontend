import Header from '../header/Header'
import Carousel from '../carousel/Carousel'

export default function Home(props) {
  const { currentUser, setCurrentUser } = props
  
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
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <br />
      {currentUserExists()}
      <Carousel />
    </div>
  )
}