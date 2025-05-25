import React from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue to-white">
      <div className="bg-white p-8 rounded shadow text-center">
        <h2 className="text-2xl font-bold text-blue-800">Account Dashboard</h2>
        <p className="mt-2 text-gray-700">Welcome! Ready to build your portfolio?</p>
        <button
          onClick={() => navigate('/info')}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Gather Portfolio Info
        </button>
      </div>
    </div>
  );
}

export default Account;