import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { Link,useLocation } from 'react-router-dom';

const Nav = () => {

    const [navIndex, setNavIndex] = useState('')
    const [myColor, setMyColor] = useState('text-white')
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        setNavIndex(currentPath)
    },[])

    const onClickIndex = (e,item) => {
        e.preventDefault()
        setNavIndex(item.href)
        setMyColor(item.label !== 'Home' ? 'text-black' : 'text-white')
    }


    return (
      <ul className={`grow w-full flex items-center justify-end space-x-2 text-base ${myColor}`}>
        {navLinks.map((item) => (
          <li key={item.label} onClick={(e)=> onClickIndex(e,item)} className={`nav relative cursor-pointer px-4 hover:${myColor}`}>
            <Link to={item.href}>{item.label}</Link>
            <div className={`border-b-2 navDiv absolute top-full left-0 w-full h-0 transition-all pt-3
                ${
                    navIndex === item.href ? '' : 'hidden'
                }`} style={{ borderColor: `${myColor === "text-black" ? 'black' : 'white'}`}}></div>
          </li>
        ))}
      </ul>
    );

};
  

export default Nav