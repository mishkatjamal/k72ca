import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

import Fullnavigation from './components/navbar/Fullnavigation'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Fullnavigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App