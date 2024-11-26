import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
