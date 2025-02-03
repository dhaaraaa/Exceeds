import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Sidenav from '../Navbar/Sidenav';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const mediaicons = [
    { micons: <FaFacebookF />, path: 'https://www.facebook.com/' },
    { micons: <FaInstagram />, path: 'https://www.instagram.com/' },
    { micons: <FaPinterest />, path: 'https://in.pinterest.com/' },
  ];

  const usericons = [
    { uicons: <FiUser className='sm:hidden hidden md:flex' />, path: '/signin' },
    { uicons: <HiOutlineShoppingCart />, path: '/cart' },
  ];

  const navitems = [
    { name: 'New Arrivals' },
    { name: 'Men', path: '/mencollection' },
    { name: 'Women', path: '/womencollection' },
    { name: 'Accessories' },
    { name: 'Store Locator' },
    { name: 'Contact Us' },
  ];

  const [menu, setmenu] = useState(false);
  const sidemenu = () => {
    setmenu(!menu);
    console.log(menu, "sidemenu");
  };

  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };

  const otherpage = (path) => {
    if (path) {
      navigate(path);
    } else {
      console.log("No path available for this item.");
    }
  };

  const [handlechange, sethandlechange] = useState({
    name: ""
  });

  const inputbox = (event) => {
    const { name, value } = event.target;
    sethandlechange({
      ...handlechange,
      [name]: value,
    });
    
    setTimeout(() => {
      navigate('/womencollection');
    }, 100);
    console.log(name, value, "dsds");
  };

  const Marquee = ["Autumn Winter Collection is Live Now", "Autumn Winter Collection is Live Now", "Autumn Winter Collection is Live Now", "Autumn Winter Collection is Live Now"];

  return (
    <>
      {/* Marquee */}
      <marquee className="bg-black flex text-white p-4" scrollamount='10' style={{ zIndex: 100 }}>
        <div className='flex text-xl gap-10'>
          {Marquee.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </marquee>

      {/* Navbar */}
      <div className="bg-[#f8f0e6] w-full shadow-lg">
        <div className="w-full flex justify-between items-center gap-5 px-6 py-2 relative" style={{ zIndex: 50 }}>
          
          {/* Mobile Icon */}
          <p className="text-3xl bg-gray-300 p-2 rounded md:hidden cursor-pointer" onClick={sidemenu}>
            <FiMenu />
          </p>

          {/* Media Icons */}
          <div className="gap-4 hidden md:flex">
            {mediaicons.map((micons, index) => (
              <a href={micons.path} className="text-3xl hover:text-gray-200 transition-colors" key={index}>
                {micons.micons}
              </a>
            ))}
          </div>

          {/* Octave Title */}
          <div className="uppercase flex flex-col items-center cursor-pointer" onClick={home}>
            <p className="text-3xl tracking-wider md:text-5xl font-semibold" style={{ fontFamily: "Montserrat, serif" }}>
              Exceed
            </p>
          </div>

          {/* User Icons and Search Bar */}
          <div className="flex gap-4 items-center md:gap-6">
            {/* Search Bar */}
            <div className="relative hidden md:flex">
              <input
                type="text"
                placeholder="Search..."
                className="h-10 px-4 rounded-lg border md:w-72 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                onChange={inputbox}
                name="name"
                value={handlechange.name}
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                <CiSearch className="text-2xl" />
              </span>
            </div>

            {/* User Icons */}
            {usericons.map((uicons, index) => (
              <span className="text-3xl hover:text-white transition-colors cursor-pointer" key={index} onClick={(e) => { e.preventDefault(), navigate(uicons.path) }}>
                {uicons.uicons}
              </span>
            ))}
          </div>
        </div>

        <div className="border-b border-b-gray-500"></div>

        {/* Navbar Items */}
        <div className="hidden md:flex justify-center items-center gap-5 text-xl font-semibold p-4 uppercase text-gray-800">
          {navitems.map((item) => (
            <div className="flex items-center cursor-pointer hover:text-amber-600" onClick={() => otherpage(item.path)} key={item.name}>
              <p>{item.name}</p>
            {item.name=='Men' || item.name == 'Women'? <span><MdKeyboardArrowDown /></span> : null}
            </div>
          ))}
        </div>
      </div>

      {/* Side Menu */}
      <Sidenav menu={menu} setmenu={setmenu} />
    </>
  );
};

export default Nav;
