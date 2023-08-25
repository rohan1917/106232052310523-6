import React, { useState } from 'react'
import HeroSlider from "react-slick"

const HeroCarousel = () => {
const [images, setImages] = useState([]);
  return <>
    <div className='lg:hidden'>
        <HeroSlider>
            
        </HeroSlider>
    </div>
    <div className='hidden lg:block'></div>
  </>
}

export default HeroCarousel;