import React from 'react'

// react-slick
import Slider from "react-slick";

// Poster
import Poster from '../Poster/Poster.Component';

const PosterSlider = (props) => {

  const {title, subtitle, posters, isDark, config} = props;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 my-2'>
      <h3 className={`text-2xl font-bold ${isDark? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{subtitle}</p>
      </div>
      <Slider {...settings} >
        {posters.map((each, index)=>(
          <Poster {...each} isDark={isDark} key={index}/>
        ))}
      </Slider>
    </>
  )
}

export default PosterSlider;