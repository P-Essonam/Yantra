import React from 'react'

import { AboutTop } from './components';
import { about } from './constants'

const About = () => {

  return (
    <main className='grow bg-primary pt-8 flex w-full justify-center'>
        <div className='relative top-16 w-2/3 mb-48'>
        {
          about.map((item) => (
            <AboutTop  title={item.title} text={item.text} key={item.title} slide={item.slide}/>
          ))
        }      
           
        </div>
    </main>
  )
}

export default About