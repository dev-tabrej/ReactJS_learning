import { useState } from 'react'
import Navbar from './assets/Navbar'
import './App.css'
import Menu from './assets/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <Menu />
    </div>
  )
}

export default App
