import { useState } from 'react'
import './App.css'
import Start from './assets/components/Start'
import Gameplay from './assets/components/Gameplay'
function App() {
  const [isStarted, setIsStarted] = useState(true);
  console.log(isStarted)
  const toggle = () => {
    setIsStarted(!isStarted)
  }
  console.log(isStarted)
  return (
    <div className='app'>
      {isStarted ? <Gameplay /> : <Start toggle={toggle} />}

      {/* <Gameplay /> */}
    </div >
  )
}

export default App
