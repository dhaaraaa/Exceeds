import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="w-full sm:w-96 p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Sign Up</h2>

        <div className="space-y-6">
          {/* First Name Input */}
          <div>
            <input
              id="firstName"
              className="w-full px-4 py-2 border border-white/40 bg-transparent rounded-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
            />
          </div>

          {/* Last Name Input */}
          <div>
            <input
              id="lastName"
              className="w-full px-4 py-2 border border-white/40 bg-transparent rounded-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              id="email"
              className="w-full px-4 py-2 border border-white/40 bg-transparent rounded-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              id="password"
              className="w-full px-4 py-2 border border-white/40 bg-transparent rounded-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              name="password"
              placeholder="Enter your Password"
            />
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button className="w-full py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition duration-300">
              Register
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-white text-sm">
            <p>
              Already have an account?{" "}
              <a href="/signin" className="underline hover:text-blue-300">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;