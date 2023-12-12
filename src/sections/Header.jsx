import React from 'react'
import { Nav } from '../components'

const Header = () => {
  return (
    <header className='w-full sticky flex top-0 z-10 px-4 py-4'>
       <h1 className='text-3xl font-extrabold'>
          <span></span>
          YANTRA
       </h1>
      <Nav />
    </header>
  )
}

export default Header