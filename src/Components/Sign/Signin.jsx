import React, { useState } from 'react';

const Signin = () => {
  const [inputChange, setInputChange] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputChange({
      ...inputChange,
      [name]: value
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
        <p className="text-6xl font-bold text-center uppercase  text-gray-700 mb-10">Login</p>

      <div className="w-full sm:w-7/12 p-8 bg-white rounded-lg shadow-lg">
        
        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold text-sm mb-2">
              Email Address
            </label>
            <input
              id="email"
              className="w-full px-4 py-2 border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="email"
              name="name"
              value={inputChange.name}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold text-sm mb-2">
              Password
            </label>
            <input
              id="password"
              className="w-full px-4 py-2 border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="password"
              name="password"
              value={inputChange.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <a
              href="#"
              className="text-sm text-indigo-500 hover:text-indigo-700 mt-2 block text-right"
            >
              Forgot Password?
            </a>
          </div>

          {/* Signin Button */}
          <div>
            <button className="w-60 py-2 h-10 border font-bold 
             hover:bg-black hover:text-white transition duration-300">
              Sign In
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-xl font-light">
            <p>
              New Customer? 
              <a href="/signup" className="underline px-2 hover:text-[#e7be8b]">
                Create an account
              </a>
            </p>
            <p className='mt-4'>
              Lost Password? 
              <a href="" className="underline px-2 hover:text-[#e7be8b]">
                Recover password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
