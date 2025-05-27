import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Information() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    skills: '',
    projects: '',
    experience: '',
    achievements: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    navigate('/portfolio');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue to-white flex items-center justify-center px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Enter Your Portfolio Info</h2>

        {[
          { label: 'Full Name', name: 'name' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Phone Number', name: 'phone' },
          { label: 'Address', name: 'address' },
          { label: 'Education', name: 'education' },
          { label: 'Skills (comma-separated)', name: 'skills' },
          { label: 'Projects', name: 'projects' },
          { label: 'Experience', name: 'experience' },
          { label: 'Achievements', name: 'achievements' }
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block font-medium text-gray-700 mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Generate Portfolio
        </button>
      </form>
    </div>
  );
}

export default Information;
