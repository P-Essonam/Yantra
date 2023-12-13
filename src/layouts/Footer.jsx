import React from 'react'
import { copyrightSign } from '../assets/icons'
import { useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <footer className={`fixed z-10 bottom-12 px-4 w-full ${
      currentPath === '/' ? 'text-white' : 'text-black'
    }`}>
      
      <div className='flex justify-between'>
        {currentPath !== '/Reservations' ?
        (<div className='flex'>
          <img src={copyrightSign} alt="copy" width={13} height={13}/>&nbsp;Restobars<span>&nbsp;(S)&nbsp;Pte. Ltd. 2024</span>
        </div>) : ''
        }
        { currentPath === '/' ?
        (<div className='capitalize self-end'>
          Terms of use and privacy policy
        </div>) : ''
        }

      </div>
      
    </footer>
  )
}

export default Footer