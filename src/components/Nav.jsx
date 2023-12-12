import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Nav = () => {

    const [navIndex, setNavIndex] = useState('')

    useEffect(() => {
        setNavIndex(navLinks[0].label)
    },[])

    const onClickIndex = (e,index) => {
        e.preventDefault()
        setNavIndex(index)
    }

    return (
      <ul className='grow w-full flex items-center justify-end space-x-2 text-base'>
        {navLinks.map((item) => (
          <li key={item.label} className='nav relative cursor-pointer px-4' onClick={(e)=> onClickIndex(e,item.label)}>
            <a href={item.href}>{item.label}</a>
            <div className={`border-b-2 border-white  navDiv absolute top-full left-0 w-full h-0 transition-all pt-3
                ${
                    navIndex === item.label ? '' : 'hidden'
                }`}></div>
          </li>
        ))}
      </ul>
    );
  };
  

export default Nav