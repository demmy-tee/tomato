import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import Homepage from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'



function App() {


  return (
    < >
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Homepage/>} />
        </Routes>
    
      </div>
          <Footer/>
    </>
  )
}

export default App
