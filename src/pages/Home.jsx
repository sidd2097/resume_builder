import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Interactive Resume Builder</h1>
      <p className="text-lg mb-6">
        Create a professional resume quickly and easily with our interactive builder.
      </p>
      <Link to="/builder">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
