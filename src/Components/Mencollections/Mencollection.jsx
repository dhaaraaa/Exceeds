import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import tshirt1 from '../images/Ar5.jpg';
import tshirt2 from '../images/men1.jpg'
import tshirt3 from '../images/menfashion1.jpg'
import tshirt4 from '../images/menfashion2.jpg'
import tshirt5 from '../images/menfashion3.jpg'

import { useNavigate } from 'react-router-dom';

const Mencollection = () => {
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
      name: 'ratings',
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
      price: "₹434/-",
      ratings:"1 * and above"
      
    },
    {
      image: tshirt2,
      hoverimage: tshirt2,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹454/-",
      ratings:"3 * and above"

    },
    {
      image: tshirt3,
      hoverimage: tshirt3,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹644/-",
      ratings:"4 * and above"

    },
    {
      image: tshirt4,
      hoverimage: tshirt4,
      title: "Jeans",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹784/-",
      ratings:"1 * and above"

    },
    {
      image: tshirt5,
      hoverimage: tshirt5,
      title: "Tshirts",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹254/-",
      ratings:"3 * and above"

    },
    {
      image: tshirt1,
      hoverimage: tshirt1,
      title: "Dresses",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹544/-",
      ratings:"3 * and above"

    },
    {
      image: tshirt1,
      hoverimage: tshirt1,
      title: "Jeans",
      code: "W23Y32",
      Gender: "Female",
      subtitle: "Cotton T-shirt",
      price: "₹865/-",
      ratings:"2 * and above"

    },
  ];

  const [selecteddata, setselecteddata] = useState([])

  const [filterData, setfilterData] = useState(Collections)
  const checkboxfn = (sub) => {
    console.log(sub , "what data comes");
  
    // Check if the sub-item (filter option) already exists in the selected data (checkboxes).
    let newFilterData = [...Collections];
 
    if (selecteddata.includes(sub)) {
      // If the filter is already applied, remove it
      newFilterData = newFilterData.filter(item => item.title !== sub);
      setselecteddata(selecteddata.filter(item => item !== sub)); // Update selected items
    } else {
      // If the filter isn't applied, add it
      newFilterData = newFilterData.filter(item => item.title === sub);
      setselecteddata([...selecteddata, sub]); // Add to selected items
    }
    if (selecteddata.includes(sub)) {
      // If the filter is already applied, remove it
      newFilterData = newFilterData.filter(item => item.Gender!== sub);
      setselecteddata(selecteddata.filter(item => item !== sub)); // Update selected items
    } else {
      // If the filter isn't applied, add it
      newFilterData = newFilterData.filter(item => item.Gender === sub);
      setselecteddata([...selecteddata, sub]); // Add to selected items
    }
    // Update filter data to match the selected filters
    setfilterData(newFilterData);
    console.log(newFilterData, "checkbox filter");
  };
  

  const navigate = useNavigate()
  const collectionpage = (item) => {
    
    navigate('/collections', { state: { message: item } })
  }

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div className="bg-white shadow-2xl w-80 p-4">
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
        <div className="grid grid-cols-3 mt-4 justify-center items-center gap-14" >
          {filterData.map((item, index) => (
            <div key={index} className="px-4 py-5 bg-white shadow-xl rounded-lg relative group"
              onClick={() => collectionpage(item)}>
              <img
                src={item.image}
                alt="product"
                className="w-[400px] h-[400px] object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={item.hoverimage}
                alt="product"
                className="w-[400px] h-[500px] object-cover rounded-lg absolute inset-0 opacity-0 
                group-hover:opacity-100 transition-opacity duration-100"
              />

              {/* Product Information */}
              <div className="mt-3 flex flex-col gap-2 justify-center items-center">
                <h1 className="font-semibold text-2xl text-amber-500">{item.title}</h1>
                <h2 className="text-gray-600 text-xl font-thin" style={{ fontFamily: 'serif' }}>{item.code}</h2>
                <p className="text-sm text-gray-500">{item.subtitle}</p>

                <div className="flex  justify-between">
                  <p className="font-semibold text-xl">{item.price}</p>
                  <span className="line-through text-xl text-red-400">$56.2</span>

                </div>
                <p  className=" text-xl">Ratings: 
                  <span className='text-amber-500 font-serif px-3'>{item.ratings}</span></p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mencollection;
