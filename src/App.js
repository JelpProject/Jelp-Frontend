import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {

    // we can verify user here

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
