import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md sm:w-96">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">
          🔐 Welcome Back
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-purple-500" />
            Remember Me
          </label>
          <a href="#" className="text-purple-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Button */}
        <div className="mb-4">
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-transform duration-300 transform hover:scale-105">
            🚀 Login
          </button>
        </div>

        {/* Register */}
        <div className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <span className="text-purple-500 hover:underline cursor-pointer">
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
