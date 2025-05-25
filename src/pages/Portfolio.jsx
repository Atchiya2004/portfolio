import React from 'react';

function Portfolio() {
  const data = JSON.parse(localStorage.getItem('portfolioData'));
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue to-white p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{data?.name}'s Portfolio</h1>
        <p className="text-lg mb-2"><strong>Education:</strong> {data?.education}</p>
        <p className="text-lg mb-2"><strong>Skills:</strong> {data?.skills}</p>
        <p className="text-lg mb-2"><strong>Projects:</strong> {data?.projects}</p>
      </div>
    </div>
  );
}

export default Portfolio;