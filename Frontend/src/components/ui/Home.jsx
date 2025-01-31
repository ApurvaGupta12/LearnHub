import React from "react"

const Home=()=>{
    return(
        <div className="bg-blue-500 text-white py-20 px-5">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-5">
          Welcome to Our Platform!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Your one-stop solution for building an AI-powered resume and getting career recommendations.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
    )
}
export default Home;