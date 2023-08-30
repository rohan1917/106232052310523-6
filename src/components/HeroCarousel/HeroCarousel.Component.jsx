import React, { useState } from 'react'

// React-Slick
import HeroSlider from "react-slick"

// Arrows
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
const [images, setImages] = useState([
  [
    {
  "adult": false,
  "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
  "genre_ids": [
    16,
    35,
    10751,
    14,
    10749
  ],
  "id": 976573,
  "original_language": "en",
  "original_title": "Elemental",
  "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
  "popularity": 2723.167,
  "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
  "release_date": "2023-06-14",
  "title": "Elemental",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 1526

  }]
]);

// Config Info
const settingsLG = {
  arrows: true,
  slidesToShow: 1,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const settings = {
   arrows: true,
  slidesToShow: 1,
  infinite: true,
  speed: 500,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
   nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

  return <>
    <div className='lg:hidden'>
        <HeroSlider {...settings}>
            {
              images.map((images)=>{
                <div className='w-full h-56 md:h-80 py-3'>
                  <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt='Hero Banner' className='w-full h-full rounded-md object-cover' />
                </div>
              })
            }
        </HeroSlider>
    </div>
    <div className='hidden lg:block'>
      <HeroSlider {...settingsLG}>
            {
              images.map((images)=>{
                <div className='w-full h-96 px-2 py-3'>
                  <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt='Hero Banner' className='w-full h-full rounded-md object-cover' />
                </div>
              })
            }
        </HeroSlider>
    </div>
  </>
}

export default HeroCarousel;