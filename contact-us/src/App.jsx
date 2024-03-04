import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Menu />
    </div>
  )
}

export default App
