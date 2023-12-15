import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer';


const HomeLayout = () => {
  return (
    <section className='flex flex-col min-h-screen w-full'>
        <Header />
        <Outlet />
        <Footer />
    </section>
  )
}

export default HomeLayout