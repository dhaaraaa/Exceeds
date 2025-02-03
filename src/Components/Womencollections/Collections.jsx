import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { cart } from "../Context/Cartcontext";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/ReactToastify.css"; // Import the CSS

const Collections = () => {
  const y = useContext(cart);
  console.log(y, "collection data");

  const data = useLocation();
  const msg = data.state.message;
  console.log(msg, "datas");

  const { carts, setcarts } = y;
  console.log(carts, "destructuring the data");

  const { total } = useContext(cart);
  console.log(total, "total val in collec");

  const addtocart = (msg) => {
    setcarts((Previtem) => [...Previtem, msg]);
    console.log(msg, "updated cart");

    // Show toast for item added to the cart
    toast.success("Item is added successfully!", {
      position: "top-center",
      autoClose: 3000, // Toast will close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer theme="dark" position="top-center" />

      <div className="flex flex-col md:flex-row justify-center items-center bg-white py-10 px-6 sm:px-12 md:px-16 gap-8">
        {/* Product Image Section */}
        <div className="w-full md:w-6/12 p-4 rounded-lg shadow-xl relative group">
          <img
            src={msg.image}
            alt="product"
            className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={msg.hoverimage}
            alt="product"
            className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-5/12 flex flex-col gap-6 p-4">
          <p className="text-3xl sm:text-4xl font-serif font-semibold text-gray-800">
            {msg.subtitle}
          </p>
          <p className="text-xl text-gray-600">{msg.code}</p>
          <div className="flex flex-col gap-4">
            {/* Price Section */}
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-amber-600">{msg.price}</p>
            </div>
            <p className="text-xl uppercase text-red-600">Inclusive of all taxes</p>

            <div className="space-y-6">
              <h1 className="text-2xl font-semibold text-gray-800">Select Size:</h1>
              <div className="flex gap-4 flex-wrap">
                {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                  <p
                    key={index}
                    className="p-4 border rounded-full w-20 h-20 text-center flex items-center justify-center text-xl font-semibold cursor-pointer hover:bg-amber-600 hover:text-white transition-all ease-in-out duration-200"
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600">{msg.subtitle}</p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <button
              className="bg-amber-600 w-full sm:w-auto py-3 px-6 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-amber-500 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
              onClick={() => addtocart(msg)}
            >
              <GiShoppingCart />
              Add to Cart
            </button>

            <button className="border-2 border-gray-300 w-full sm:w-auto py-3 px-6 font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;