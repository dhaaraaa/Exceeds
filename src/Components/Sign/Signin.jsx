import React, { useState } from "react";

const Signin = () => {
  const [inputChange, setInputChange] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputChange({
      ...inputChange,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="w-full sm:w-96 p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Sign In</h2>

        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-white font-semibold text-sm mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              className="w-full px-4 py-2 border border-white/40 bg-transparent rounded-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              type="email"
              name="name"
              value={inputChange.name}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-white font-semibold text-sm mb-2"
            >
              Password
            </label>
            <input
              id="password"
              className="w-full px-4 py-2 border border-white/40 bg-transparent rounded-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              name="password"
              value={inputChange.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <a
              href="#"
              className="text-sm text-blue-300 hover:text-white mt-2 block text-right"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign-in Button */}
          <div className="text-center">
            <button className="w-full py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition duration-300">
              Sign In
            </button>
          </div>

          {/* Signup & Recover Links */}
          <div className="text-center text-white text-sm">
            <p>
              New Customer?{" "}
              <a href="/signup" className="underline hover:text-blue-300">
                Create an account
              </a>
            </p>
            <p className="mt-4">
              Lost Password?{" "}
              <a href="" className="underline hover:text-blue-300">
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