import Header from '../header/Header'

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
      <h1>This is the Home component</h1>
      {currentUserExists()}
    </div>
  )
}