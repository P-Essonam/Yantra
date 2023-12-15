import React from 'react'
import { copyrightSign } from '../assets/icons'
import { useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <footer className={`fixed z-10 bottom-0 p-4 pb-12 w-full text-sm  ${
      currentPath === '/' ? 'text-white' : 'text-black bg-primary'
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