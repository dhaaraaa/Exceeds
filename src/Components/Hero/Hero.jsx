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
    speed: 300, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto play
    autoplaySpeed: 2000, // Set speed of auto play in ms
    arrows: false, // Hide next/prev arrows
    cssEase: "ease-in-out", // Smooth transition
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ), // Custom positioning of the dots
  };

  return (
    <div className="w-full h-[400px] md:w-full md:h-[800px] relative">
      <Slider {...settings} className="w-full h-full relative">
        {hero.map((item, index) => (
          <div key={index} className="w-full h-[400px] md:h-[800px] relative">
            <img
              src={item}
              alt={`Slide ${index + 1}`}  // Fixed alt attribute
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
            {/* Text content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">Welcome to Our World</h2>
              <p className="text-lg md:text-2xl mb-6">Discover amazing things, explore more with us.</p>
              <button className="px-6 py-3 bg-[#FF6900] rounded-full text-white font-semibold hover:bg-[#ff5733] transition-all">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center gap-2">
          {hero.map((_, idx) => (
            <div
              key={idx}
              className="w-3 h-3 rounded-full bg-white opacity-60 hover:opacity-100 transition duration-300"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
