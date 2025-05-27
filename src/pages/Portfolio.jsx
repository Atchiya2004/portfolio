import React from 'react';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('portfolioData'));

  const handleBack = () => {
    navigate('/info');
  };

  const handleClear = () => {
    localStorage.removeItem('portfolioData');
    navigate('/info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue to-white p-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">{data?.name}'s Portfolio</h1>
        <p className="text-lg mb-3"><strong>Email:</strong> {data?.email}</p>
        <p className="text-lg mb-3"><strong>Phone:</strong> {data?.phone}</p>
        <p className="text-lg mb-3"><strong>Address:</strong> {data?.address}</p>
        <p className="text-lg mb-3"><strong>Education:</strong> {data?.education}</p>
        <p className="text-lg mb-3"><strong>Skills:</strong> {data?.skills}</p>
        <p className="text-lg mb-3"><strong>Projects:</strong> {data?.projects}</p>
        <p className="text-lg mb-3"><strong>Experience:</strong> {data?.experience}</p>
        <p className="text-lg mb-6"><strong>Achievements:</strong> {data?.achievements}</p>

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Edit
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Cancel & Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
