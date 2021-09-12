import Header from '../header/Header'
import Carousel from '../carousel/Carousel'
import Reviews from '../reviews/Reviews'

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
      <br />
      <Reviews />
    </div>
  )
}