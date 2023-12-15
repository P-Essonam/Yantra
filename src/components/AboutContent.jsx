import React from 'react'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade,Navigation } from 'swiper/modules';

const AboutContent = ({ slide }) => {


  return (
        

    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect='fade'
        loop={true}
        navigation={true}
        modules={[EffectFade,Navigation]}
        className="mySwiper"
        >
        {
            slide && slide.map((item) => (
                
                <SwiperSlide className='w-full' key={item.title}>
                    <img src={item.image} alt={item.title} className='h-1/3 bg-cover'/>
                    <div>
                        <h4 className='text-base text-gray-800 font-medium'>{item.title}</h4>
                        <div className='text-xs'>
                            {item.text} 
                        </div>
                    </div>
                </SwiperSlide>
            ))
            
        }
    </Swiper>

  )
}

export default AboutContent