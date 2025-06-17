import React from "react";
import "./App.css";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 min-h-screen font-sans font-semibold">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1664206139430-36826ba0335a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjB3ZWJzaXRlfGVufDB8fDB8fHww"
            alt="food-banner"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-5 text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl text-green-600">
            Welcome To Ultimate
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-800">
            Food Delivery App - Parul
          </h2>
          <h2 className="text-2xl md:text-4xl text-red-500">Zomato</h2>
          <p className="text-lg md:text-2xl text-blue-500">
            "Good Food with Good Mindset"
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 w-fit mx-auto md:mx-0">
            Explore Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
