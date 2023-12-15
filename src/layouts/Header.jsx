import React from 'react'
import { Nav } from '../components'
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <header className={`w-full fixed flex top-0 z-10 px-4 py-4 ${
      currentPath !== '/' ? 'bg-primary' : '' 
    }`}>
       <h1 className={`text-3xl font-extrabold ${ currentPath !== '/' ? 'text-black' : 'text-white'}`}>
          <span></span>
          YANTRA
       </h1>
      <Nav />
    </header>
  )
}

export default Header