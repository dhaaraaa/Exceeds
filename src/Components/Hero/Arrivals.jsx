import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import Ar1 from '../images/Ar1.jpg';
import Ar2 from '../images/Ar2.jpg';
import Ar3 from '../images/Ar3.jpg';
import Ar4 from '../images/Ar4.jpg';
import Ar5 from '../images/Ar5.jpg';
import Ar6 from '../images/women.jpg';
import Ar8 from '../images/men1.jpg';
import Ar7 from '../images/Arrivalpost.jpg';
import videos from '../images/video2.mp4'
import delivery from '../images/fast-delivery.png'
import service from '../images/service.png'
import status from '../images/delivery-status.png'
import clothhanging from '../images/clothhanging.jpg'
import { useNavigate } from 'react-router-dom';
const Arrivals = () => {
  const arrivals = [
    {
      image: Ar1,
      title: "T-shirts",
      code: "W23Y32",
      subtitle: "Cotton T-shirt",
      price: "$45.2/-"
    },
    {
      image: Ar2,
      title: "Jeans",
      code: "P12J45",
      subtitle: "Slim Fit Jeans",
      price: "$59.99/-"
    },
    {
      image: Ar3,
      title: "Jackets",
      code: "X65J32",
      subtitle: "Leather Jacket",
      price: "$120.00/-"
    },
    {
      image: Ar4,
      title: "Sneakers",
      code: "S30SN90",
      subtitle: "Running Sneakers",
      price: "$75.5/-"
    },
    {
      image: Ar5,
      title: "Hats",
      code: "H15H20",
      subtitle: "Baseball Cap",
      price: "$20.99/-"
    }
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Slide transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Automatically slide
    autoplaySpeed: 3000, // 3 seconds delay before automatic slide
    arrows: false, // Hide next/prev arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        }
      }
    ]
  };

  const explore = [
    {
      wimage: Ar6,
      text: ['"Women\'s  Collection"', 'explore collection'],
      path: '/womencollection'
    },
    {
      wimage: Ar8,
      text: ['"men\'s collecton"', 'explore collection']
    }
  ]

  const pngs = [
    {
      symbols: delivery,
      headings: "Payment delivery",
      sub: "Free shipping for orders over Rs -1000"
    },
    {
      symbols: status,
      headings: "RETURN & REFUND",
      sub: "100% money refund within 6 days"
    },
    {
      symbols: service,
      headings: "QUALITY SUPPORT",
      sub: "Always online feedback 24/7"
    },
  ]

  const navigate = useNavigate()
  const nextpage = () => {
    navigate('/womencollection')
  }

  return (
    <>
      <div className="mt-10 px-4 bg-white md:mt-16">
        <div className='flex justify-center items-center text-3xl md:text-5xl'>
          <h5 className=" uppercase font-bold text-gray-600  mt-10 tracking-wide md:mt-16">
            New <span className="text-black">Arrivals</span>
          </h5>
        </div>
        {/* Carousel */}
        <Slider {...settings} className="mt-10">
          {arrivals.map((aitem, index) => (
            <div key={index} className="flex flex-col items-center w-[400px] h-[500px] bg-white justify-center   p-6 rounded-lg
             shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:flex md:h-[800px]" >
              <div className='w-full flex flex-col justify-center items-center'>
                <img
                  src={aitem.image}
                  className="w-[300px] h-[300px] object-cover hover:scale-105 hover:shadow-xl rounded-lg mb-4 md:w-[400px] md:h-[600px]"
                  alt={aitem.title}
                />
                <div className='  flex flex-col justify-center items-center text-2xl'>
                  <p className="font-semibold uppercase text-lg ">{aitem.title}</p>
                  <p className="font-medium  text-xl  text-gray-600">{aitem.code}</p>
                  <h1 className="font-medium text-gray-400  text-xl mb-2 uppercase">{aitem.subtitle}</h1>
                  <h2 className="text-2xl font-bold  text-black">
                    {aitem.price}
                    <span className="text-xl text-red-500 font-semibold ">40% off</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='mt-20 bg-white p-4 md:flex md:gap-20 md:items-center'>
        <div className='text-5xl md:w-1/2 md:p-10'>
          <h1 className='text-gray-500 text-wrap tracking-wide mt-2  font-bold uppercase  '> Summer<br></br>
            breeze 2024:
            <span className='text-gray-700  '>Where style meets sunshine</span>

          </h1>
          <p className='text-xl text-black font-semibold mt-6 leading-relaxed md:text-2xl '>Dive into the heart of summer with our "Summer Breeze 2024" collection, a refreshing take on seasonal fashion. This line is a tribute to the vibrant energy of the sunniest days, featuring an array of chic, comfortable pieces that speak to the soul of summer.</p>
          <button className='text-xl uppercase w-64 h-20 mt-15 bg-blue-950 text-white tracking-wide p-2 rounded'>explore collection</button>
        </div>

        <div className=' mt-4 md:mt-0'>
          <img src={Ar7} className='w-full md:h-[500px] md:object-cover' />
        </div>

      </div>

      <div className='   gap-4 items-center justify-center md:flex '>
        {
          explore.map((item) => (
            <div className='  uppercase space-y-2 text-2xl flex flex-col py-8 items-center
             hover:bg-white hover:opacity-80 transition-all duration-200 ease-in-out md:w-5/12 
             lg:w-8/12 md:text-xl' onClick={nextpage}>
              <img src={item.wimage} alt='pics' className='shadow-lg  w-8/12 h-7/12 mb-4 ' />
              <h1 className='  font-bold w-52 text-center md:w-full '>{item.text[0]}</h1>
              <h1 className='text-gray-500 mt-1 font-semibold'>{item.text[1]}</h1>
            </div>
          ))
        }
      </div>

      <div className="w-full h-auto">
        <video
          src={videos}
          type="video/mp4"
          autoPlay
          loop
          className="w-full h-auto" ></video>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-8 md:mt-20 gap-6 md:gap-11'>
        {
          pngs.map((item) => (
            <div className='flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <img src={item.symbols} className='w-25 h-25 md:20 md:20' />
              <h1 className='text-xl font-bold uppercase mt-2 text-center'>{item.headings}</h1>
              <p className='text-xl font-medium mt-2 text-center'>{item.sub}</p>
            </div>
          ))
        }
      </div>

      <div className='mt-20  p-4 md:flex md:gap-20 md:items-center justify-center bg-white'>
        <div className=' mt-4 md:mt-0 ' >
          <img src={clothhanging} className='w-full md:h-[500px] md:object-cover' />
        </div>
        <div className='text-5xl md:w-[700px] md:p-1'>

          <h1 className='text-gray-500 text-xl tracking-wide mt-2  font-bold uppercase  md:text-7xl'> Locate Your
            <br></br>

            <span className='text-gray-700  '> Nearest Store</span>

          </h1>
          <p className='text-xl text-black font-semibold mt-6 leading-relaxed md:text-2xl '>Where Fashion Meets  </p>
          <p className='text-xl'>Convenience</p>
          <button className='text-xl font-bold uppercase w-45 h-15 mt-8 bg-gray-600 text-white tracking-wide p-2 '>Find now</button>
        </div>
      </div>


    </>
  );
};

export default Arrivals;
