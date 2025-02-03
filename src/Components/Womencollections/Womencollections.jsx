import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import tshirt1 from '../images/Tshirts1.jpg';
import tshirt2 from '../images/Tshirts2.jpg';
import tshirt3 from '../images/Tshirts3.jpg';
import tshirt4 from '../images/Tshirts4.jpg';
import tshirt5 from '../images/Tshirts5.jpg';
import tshirt6 from '../images/Ar1.jpg';
import tshirt7 from '../images/Tshirts1.jpg';
import tshirt8 from '../images/Ar3.jpg';
import { useNavigate } from 'react-router-dom';
import aos from "aos";
import 'aos/dist/aos.css'

const Womencollections = () => {

  useEffect(()=>{
    aos.init({
      duration:2000,
      easing:'ease-in-out',
      once:false,
      offset:100,
      delay:100
    })
  })

  const [expandedIndex, setExpandedIndex] = useState(null);

  const sidebar = [
    {
      name: 'Gender',
      subitem: ["Women", "Men"]
    },
    {
      name: 'Size',
      subitem: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    {
      name: 'Category',
      subitem: ["Tshirts", "Jeans", "Jackets", "Dresses", "Shoes"]
    },
    {
      name: 'Ratings',
      subitem: ["1 * and above", "2 * and above", "3* and above", "4 * and above"]
    },
    {
      name: 'Price',
      subitem: [456, 546, 234, 345]
    },
  ];

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Collections = [
    {
      image: tshirt1,
      hoverimage: tshirt1,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹434/-"
    },
    {
      image: tshirt3,
      hoverimage: tshirt3,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹454/-"
    },
    {
      image: tshirt5,
      hoverimage: tshirt5,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹644/-"
    },
    {
      image: tshirt6,
      hoverimage: tshirt6,
      title: "Jeans",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹784/-"
    },
    {
      image: tshirt7,
      hoverimage: tshirt7,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹254/-"
    },
    {
      image: tshirt8,
      hoverimage: tshirt8,
      title: "Dresses",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹544/-"
    },
    {
      image: tshirt2,
      hoverimage: tshirt2,
      title: "Jeans",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹865/-"
    },
  ];

  const [selecteddata, setselecteddata] = useState([]);
  const [filterData, setfilterData] = useState(Collections);

  const checkboxfn = (sub) => {
    console.log(sub);

    let newFilterData = [...Collections];

    if (selecteddata.includes(sub)) {
      newFilterData = newFilterData.filter(item => item.title !== sub);
      setselecteddata(selecteddata.filter(item => item !== sub));
    } else {
      newFilterData = newFilterData.filter(item => item.title === sub);
      setselecteddata([...selecteddata, sub]);
    }

    setfilterData(newFilterData);
    console.log(newFilterData, "checkbox filter");
  };

  const navigate = useNavigate();
  const collectionpage = (item) => {
    navigate('/collections', { state: { message: item } });
  }

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Sidebar */}
      <div className="bg-white shadow-2xl lg:w-80 w-full p-4 hidden md:block">
        <h1 className="text-3xl mb-4 font-medium" style={{ fontFamily: 'sans-serif' }}>Filters</h1>
        <div>
          {sidebar.map((item, index) => (
            <div key={index} className="mb-4 p-3 rounded">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-serif">{item.name}</h1>
                <p onClick={() => toggleSection(index)}>
                  {expandedIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </p>
              </div>
              <p className="border-b-2 border-gray-400 mt-6"></p>

              {expandedIndex === index && (
                <div className="mt-2 flex flex-col gap-4">
                  {item.subitem.map((sub, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name={item.name}
                        value={sub}
                        className="w-6 h-6"
                        onClick={() => checkboxfn(sub)}
                      />
                      <p className="text-xl font-extralight" style={{ fontFamily: 'initial' }}>{sub}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-grow p-4">
        <div className="flex mt-5 justify-end gap-2">
          <label className="text-xl font-thin uppercase">sort by:</label>
          <select name="" id="" className="w-52 border border-gray-200">
            <option value="">Price</option>
            <option value="">Categories</option>
            <option value="">Ratings</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 mt-4 justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {filterData.map((item, index) => (
            <div key={index} className="px-4 py-5 bg-white shadow-xl rounded-lg relative group" 
            onClick={() => collectionpage(item)}
            data_aos={"fade-down"}>
              <img
                src={item.image}
                alt="product"
                className="w-full h-[400px] object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
               
              />
              <img
                src={item.hoverimage}
                alt="product"
                className="w-full h-[500px] object-cover rounded-lg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              />
              {/* Product Information */}
              <div className="mt-3 flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl text-amber-500">{item.title}</h1>
                <h2 className="text-gray-600 text-xl font-thin" style={{ fontFamily: 'serif' }}>{item.code}</h2>
                <p className="text-sm text-gray-500">{item.subtitle}</p>

                <div className="flex justify-between">
                  <p className="font-semibold text-xl">{item.price}</p>
                  <span className="line-through text-xl text-red-400">$56.2</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womencollections;
