import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeel } from './topMeel';
import CarouselItem from './CarouselItem';

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:100,
    arrows:false,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeel.map((item, index) => (
          <CarouselItem 
            key={index} 
            image={item.image} 
            title={item.title} 
          />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
