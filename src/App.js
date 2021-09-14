import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main'
import { verify } from './components/service/Service'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleVerify = async() => {
    const user = await verify()
    setCurrentUser(user)
    console.log(user)
  }

  useEffect(() => {

    // we can verify user here
    handleVerify()

  }, [])

  return (
    <div>
      <Main
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}

export default App;
