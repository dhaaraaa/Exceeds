import React, { useContext } from 'react';
import { cart } from './Context/Cartcontext';

const Cart = () => {
  const { carts, total } = useContext(cart);
  console.log(total, "items addedddddddd");

  console.log(carts, "cart items are added on cart page");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Cart items */}
      <div className="w-full lg:w-3/5">
        <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>
        
        {carts.length === 0 ? (
          <div className="flex justify-center text-lg font-medium text-gray-600">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div>
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-lg shadow-lg mb-6 p-5"
              >
                <div className="w-1/3 sm:w-1/4 md:w-1/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-32 w-32 rounded-md"
                  />
                </div>

                <div className="flex flex-col justify-between w-2/3 sm:w-1/2 md:w-2/3">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-md text-gray-600">{item.subtitle}</p>
                  <p className="text-xl font-semibold text-blue-600 mt-2">{item.price}</p>
                </div>

                <button
                  className="bg-red-600 text-white text-lg p-2 rounded-full hover:bg-red-600 transition duration-300"
                  onClick={() => {/* handle delete functionality here */}}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Details Section */}
      <div className="bg-black/25 w-full lg:w-2/5 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Price Details</h2>
        <div className="flex items-center gap-3 mb-4">
          <input type="checkbox" className="w-5 h-5" />
          <p className="text-lg">This order contains a gift</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-lg text-gray-700">Total Amount</p>
          <p className="text-xl font-semibold text-blue-600">{total}</p>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
