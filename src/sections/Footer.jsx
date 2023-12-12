import React from 'react'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='text-white fixed z-10 bottom-12 px-4 w-full'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={copyrightSign} alt="copy" width={13} height={13}/>&nbsp;Restobars<span>&nbsp;(S)&nbsp;Pte. Ltd. 2024</span>
        </div>
        <div className='capitalize self-end'>
          Terms of use and privacy policy
        </div>
      </div>
    </footer>
  )
}

export default Footer