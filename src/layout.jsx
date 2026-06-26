import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

const Layout = () => {
  return (
    <>
      <header>
        <nav><Navbar /></nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout