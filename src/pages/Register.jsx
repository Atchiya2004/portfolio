import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../components/Google';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/account'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-white to-sky-100 p-6">
      <div className="max-w-md w-full bg-white rounded shadow p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-sky-800">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full px-4 py-2 border rounded border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border rounded border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-2 border rounded border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="number"
            placeholder="Enter your Contact number"
            className="w-full px-4 py-2 border rounded border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
          >
            Register
          </button>
        </form>

        <Google onSuccess={() => navigate('/account')} />

        <p className="mt-6 text-center text-sky-700">
          Already have an account?{' '}
          <Link to="/login" className="text-sky-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
