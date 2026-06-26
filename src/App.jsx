import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/layout/navbar'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/layout/footer'
import Home from './components/home'

function App() {
  
  return (
    <>
    <header>
      <nav>
        <Navbar/>
      </nav>
    </header>
    <main className="flex-1">
      <Routes>
        <Route path= '/' element={<Home/>} ></Route>
        <Route path= '/about' element={<About/>} ></Route>
        <Route path= '/contact' element={<Contact/>} ></Route>
      </Routes>
    </main>
    <Footer/>

    </>
  )
}

export default App
