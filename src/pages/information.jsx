import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Information() {
  const [form, setForm] = useState({ name: '', education: '', skills: '', projects: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('portfolioData', JSON.stringify(form));
    navigate('/portfolio');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue to-white">
      <div className="bg-white p-8 rounded shadow w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-800">Portfolio Information</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input type="text" placeholder="Education" className="w-full border px-4 py-2 rounded" onChange={(e) => setForm({ ...form, education: e.target.value })} required />
          <textarea placeholder="Skills" className="w-full border px-4 py-2 rounded" onChange={(e) => setForm({ ...form, skills: e.target.value })} required />
          <textarea placeholder="Projects" className="w-full border px-4 py-2 rounded" onChange={(e) => setForm({ ...form, projects: e.target.value })} required />
          <button className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Information;