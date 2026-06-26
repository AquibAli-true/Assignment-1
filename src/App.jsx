import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Layout from './layout'
import About from './components/about'
import Contact from './components/contact'
import NotFound from './components/notFound'
import Home from './components/home'

function App() {
  
  return (
    <>

      <Routes>
        <Route element={<Layout/>} >
        <Route path= '/' element={<Home/>} ></Route>
        <Route path= '/about' element={<About/>} ></Route>
        <Route path= '/contact' element={<Contact/>} ></Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>


    </>
  )
}

export default App
