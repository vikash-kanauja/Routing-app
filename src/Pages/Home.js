import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <div className="bg-gray-100  min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md m-5">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Homepage</h1>
        <p className="text-gray-700">This is a simple homepage built using React.js and Tailwind CSS.</p>
        <div className="mt-6">
          <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home