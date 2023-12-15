import React from 'react'
import AboutContent from './AboutContent'

const AboutTop = ({ title,text,slide }) => {
  return (
    
      <div className='w-full mt-14'>
        <h2 className='text-3xl text-gray-800 font-medium'>{title}</h2>         
        <div className='mt-4 mb-3'>{text}</div>
        <AboutContent slide={slide}/>
      </div>
  )
}

export default AboutTop
