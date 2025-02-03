import React, { useContext } from "react";
import { cart } from "./Context/Cartcontext";

const Cart = () => {
  const { carts, total } = useContext(cart);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8 px-4 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Cart Items Section */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold border-b pb-4 mb-4">Shopping Cart</h2>

        {carts.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 last:border-b-0"
              >
                {/* Product Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                  <p className="text-blue-600 font-semibold mt-1">{item.price}</p>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-red-600 transition"
                  onClick={() => {/* Handle delete functionality here */}}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Summary Section */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4">Price Details</h2>

        <div className="flex items-center space-x-3 mb-4">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-sm text-gray-700">This order contains a gift</p>
        </div>

        <div className="flex justify-between items-center text-lg font-medium mb-4">
          <p>Total Amount</p>
          <p className="text-blue-600">{total}</p>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;