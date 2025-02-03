import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import tshirt1 from "../images/Ar5.jpg";
import tshirt2 from "../images/men1.jpg";
import tshirt3 from "../images/menfashion1.jpg";
import tshirt4 from "../images/menfashion2.jpg";
import tshirt5 from "../images/menfashion3.jpg";
import Footer from "../Footer/Footer";

const Mencollection = () => {
  const Collections = [
    {
      image: tshirt1,
      hoverimage: tshirt1,
      title: "Cotton T-shirt",
      code: "M23Y32",
      gender: "Men",
      category: "Tshirts",
      size: "M",
      price: "₹434/-",
      ratings: "1 * and above",
    },
    {
      image: tshirt2,
      hoverimage: tshirt2,
      title: "Denim Jeans",
      code: "M23Y33",
      gender: "Men",
      category: "Jeans",
      size: "L",
      price: "₹754/-",
      ratings: "3 * and above",
    },
    {
      image: tshirt3,
      hoverimage: tshirt3,
      title: "Leather Jacket",
      code: "M23Y34",
      gender: "Men",
      category: "Jackets",
      size: "XL",
      price: "₹1544/-",
      ratings: "4 * and above",
    },
    {
      image: tshirt4,
      hoverimage: tshirt4,
      title: "Winter Jacket",
      code: "M23Y35",
      gender: "Men",
      category: "Jackets",
      size: "M",
      price: "₹984/-",
      ratings: "2 * and above",
    },
    {
      image: tshirt5,
      hoverimage: tshirt5,
      title: "Cotton T-shirt",
      code: "M23Y36",
      gender: "Men",
      category: "Tshirts",
      size: "S",
      price: "₹334/-",
      ratings: "5 * and above",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: ["Men"], // default to men
    category: [],
    size: [],
    ratings: [],
    price: [],
  });

  const [filterData, setFilterData] = useState(Collections);
  const [sortCriteria, setSortCriteria] = useState("");

  const sidebar = [
    { name: "Gender", subitem: ["Men", "Women"] },
    { name: "Size", subitem: ["S", "M", "L", "XL", "XXL"] },
    { name: "Category", subitem: ["Tshirts", "Jeans", "Jackets", "Shoes"] },
    { name: "Ratings", subitem: ["1 * and above", "2 * and above", "3 * and above", "4 * and above"] },
    { name: "Price", subitem: ["₹0-500", "₹500-1000", "₹1000+"] },
  ];

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleFilterChange = (filterType, filterValue) => {
    const newFilters = { ...selectedFilters };
    if (newFilters[filterType].includes(filterValue)) {
      newFilters[filterType] = newFilters[filterType].filter(item => item !== filterValue);
    } else {
      newFilters[filterType].push(filterValue);
    }
    setSelectedFilters(newFilters);
  };

  const applyFilters = () => {
    let filteredData = [...Collections];
    for (let filterType in selectedFilters) {
      if (selectedFilters[filterType].length > 0) {
        filteredData = filteredData.filter(item => selectedFilters[filterType].includes(item[filterType]));
      }
    }
    setFilterData(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const handleSort = (e) => {
    setSortCriteria(e.target.value);
    let sortedData = [...filterData];
    if (e.target.value === "Price") {
      sortedData.sort((a, b) => parseInt(a.price.replace("₹", "").replace("/-", "")) - parseInt(b.price.replace("₹", "").replace("/-", "")));
    } else if (e.target.value === "Ratings") {
      sortedData.sort((a, b) => b.ratings.localeCompare(a.ratings));
    }
    setFilterData(sortedData);
  };

  const navigate = useNavigate();
  const collectionpage = (item) => {
    navigate("/collections", { state: { message: item } });
  };

  return (
    <>
    <div className="flex w-full">
      {/* Sidebar Filters */}
      <div className="bg-white shadow-xl w-80 p-6 hidden lg:block">
        <h1 className="text-3xl mb-6 font-semibold text-gray-800">Filters</h1>
        <div>
          {sidebar.map((item, index) => (
            <div key={index} className="mb-6">
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
                        value={sub}
                        onChange={() => handleFilterChange(item.name.toLowerCase(), sub)}
                        className="w-5 h-5"
                      />
                      <span className="text-sm text-gray-600">{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-grow p-6">
        <div className="flex mt-5 justify-end gap-4">
          <label className="text-lg font-medium">Sort By:</label>
          <select onChange={handleSort} value={sortCriteria} className="w-48 p-2 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="Price">Price</option>
            <option value="Ratings">Ratings</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {filterData.map((item, index) => (
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
                <p className="text-sm text-gray-600">{item.code}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-semibold text-lg text-gray-900">{item.price}</span>
                  <span className="text-sm text-gray-400 line-through">{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.ratings}</p>
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

export default Mencollection;