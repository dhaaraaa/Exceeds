import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import tshirt1 from '../images/Tshirts1.jpg';
import tshirt2 from '../images/Tshirts2.jpg';
import tshirt3 from '../images/Tshirts3.jpg';
import tshirt4 from '../images/Tshirts4.jpg';
import tshirt5 from '../images/Tshirts5.jpg';
import tshirt6 from '../images/Ar1.jpg';
import tshirt7 from '../images/Tshirts1.jpg';
import tshirt8 from '../images/Ar3.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Womencollections = () => {
  const Collections = [
    { image: tshirt1, hoverimage: tshirt1, title: 'Tshirts', code: 'W23Y32', Gender: 'Female', subtitle: 'Cotton T-shirt', price: '₹434/-', size: 'M' },
    { image: tshirt3, hoverimage: tshirt3, title: 'Tshirts', code: 'W23Y32', Gender: 'Female', subtitle: 'Cotton T-shirt', price: '₹454/-', size: 'L' },
    { image: tshirt5, hoverimage: tshirt5, title: 'Tshirts', code: 'W23Y32', Gender: 'Female', subtitle: 'Cotton T-shirt', price: '₹644/-', size: 'S' },
    { image: tshirt6, hoverimage: tshirt6, title: 'Jeans', code: 'W23Y32', Gender: 'Female', subtitle: 'Denim Jeans', price: '₹784/-', size: 'M' },
    { image: tshirt7, hoverimage: tshirt7, title: 'Tshirts', code: 'W23Y32', Gender: 'Female', subtitle: 'Cotton T-shirt', price: '₹254/-', size: 'L' },
    { image: tshirt8, hoverimage: tshirt8, title: 'Dresses', code: 'W23Y32', Gender: 'Female', subtitle: 'Cotton Dress', price: '₹544/-', size: 'XL' },
    { image: tshirt2, hoverimage: tshirt2, title: 'Jeans', code: 'W23Y32', Gender: 'Female', subtitle: 'Denim Jeans', price: '₹865/-', size: 'M' },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    size: [],
    category: [],
    price: [],
  });

  const sidebar = [
    {
      name: 'Gender',
      subitem: ['Women', 'Men'],
    },
    {
      name: 'Size',
      subitem: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      name: 'Category',
      subitem: ['Tshirts', 'Jeans', 'Jackets', 'Dresses', 'Shoes'],
    },
    {
      name: 'Price',
      subitem: ['₹0-500', '₹500-1000', '₹1000-1500'],
    },
  ];

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[filterType].includes(value)) {
      updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
    } else {
      updatedFilters[filterType].push(value);
    }
    setSelectedFilters(updatedFilters);
  };

  const priceRangeFilter = (item, price) => {
    const priceRange = price.split('-');
    const minPrice = parseInt(priceRange[0].replace('₹', '').replace(',', ''));
    const maxPrice = priceRange[1] ? parseInt(priceRange[1].replace('₹', '').replace(',', '')) : Infinity;
    const itemPrice = parseInt(item.price.replace('₹', '').replace('/-', ''));
    return itemPrice >= minPrice && itemPrice <= maxPrice;
  };

  const filteredData = Collections.filter((item) => {
    const { gender, size, category, price } = selectedFilters;
    const genderMatch = gender.length === 0 || gender.includes(item.Gender);
    const sizeMatch = size.length === 0 || size.includes(item.size);
    const categoryMatch = category.length === 0 || category.includes(item.title);
    const priceMatch = price.length === 0 || price.some((p) => priceRangeFilter(item, p));
    return genderMatch && sizeMatch && categoryMatch && priceMatch;
  });

  const navigate = useNavigate();
  const collectionpage = (item) => {
    navigate('/collections', { state: { message: item } });
  };

  // Clear Filters
  const clearFilters = () => {
    setSelectedFilters({
      gender: [],
      size: [],
      category: [],
      price: [],
    });
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row w-full">
      {/* Sidebar */}
      <div className="bg-white shadow-md lg:w-80 w-full p-6 hidden md:block sticky top-0 h-screen overflow-y-auto">
        <h1 className="text-3xl mb-6 font-semibold text-gray-900">Filters</h1>
        <div>
          {sidebar.map((item, index) => (
            <div key={index} className="mb-6 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-gray-700">{item.name}</h2>
                <p onClick={() => toggleSection(index)} className="cursor-pointer text-gray-600">
                  {expandedIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </p>
              </div>
              <hr className="border-gray-300 mt-3" />

              {expandedIndex === index && (
                <div className="mt-4">
                  {item.subitem.map((sub, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name={item.name}
                        value={sub}
                        className="w-5 h-5"
                        onChange={() => handleFilterChange(item.name.toLowerCase(), sub)}
                      />
                      <span className="text-sm text-gray-600">{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Clear Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="flex-grow p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              onClick={() => collectionpage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition duration-300 ease-in-out hover:opacity-80"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-semibold text-lg text-gray-900">{item.price}</span>
                  <span className="text-sm text-gray-400 line-through">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Womencollections;