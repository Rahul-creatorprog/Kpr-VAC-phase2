import React from 'react'
import User from './components/User'
import State from './hooks/State'
import Form from './hooks/Form'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App