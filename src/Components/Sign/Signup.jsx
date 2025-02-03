import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen ">
        <p className="text-6xl font-bold text-center uppercase  text-gray-700 mb-10">Login</p>

      <div className="w-full sm:w-7/12 p-8 bg-white rounded-lg shadow-lg">
        
        <div className="space-y-6">
          {/* FirstName Input */}
          <div>
            <input
              id="email"
              className="w-full px-4 py-2 border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="email"
              name="name"
              placeholder="Enter your FirstName"
            />
          </div>
          {/* Lastname Input */}
          <div>
            <input
              id="email"
              className="w-full px-4 py-2 border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="email"
              name="name"
              placeholder="Enter your LastName"
            />
          </div>
          {/* Email Input */}
          <div>
            <input
              id="email"
              className="w-full px-4 py-2 border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="email"
              name="name"
              placeholder="Enter your Email"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              id="password"
              className="w-full px-4 py-2 border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Signin Button */}
          <div>
            <button className="w-60 py-2 h-10 border font-bold 
             hover:bg-black hover:text-white transition duration-300">
              Register
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-xl font-light">
           
            <p className='mt-4'>
              Already have an account
              <a href="" className="underline px-2 hover:text-[#e7be8b]">
                Signin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
