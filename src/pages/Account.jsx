import React from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue to-white">
      <div className="bg-white p-12 rounded-xl shadow-xl text-center w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Account Dashboard</h2>
        <p className="text-lg text-gray-700 mb-8">
          Welcome! Ready to build your portfolio?
        </p>
        <button
          onClick={() => navigate('/info')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Gather Portfolio Info
        </button>
      </div>
    </div>
  );
}

export default Account;
