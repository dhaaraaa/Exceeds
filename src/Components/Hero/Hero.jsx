import React from 'react';
import hero1 from '../images/Hero1.jpg';
import hero2 from '../images/Hero2.jpg';
import hero3 from '../images/Hero3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Import the Slider component

const Hero = () => {
  const hero = [hero2, hero3, hero1]; // Array of image sources

  // Slider settings (you can customize these according to your needs)
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Set speed of auto play in ms
    arrows: false, // Hide next/prev arrows
    cssEase: "ease-in-out", // Smooth transition
  };

  return (
    <div className="w-full h-[400px]  z-50 md:w-full md:h-[800px]">
      <Slider {...settings} className="w-full h-full">
        {hero.map((item, index) => (
          <div key={index} className="w-full h-[400px] md:h-[800px] ">
            <img
              src={item}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-fit rounded-lg" 
            />
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
