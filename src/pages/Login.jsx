import React from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../components/Google';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate('/account'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-sky-200 to-white">
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center text-sky-800">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
          >
            Login
          </button>
        </form>

        <Google /> 

        <p className="mt-6 text-center text-gray-600">
          New user?{' '}
          <a href="/register" className="text-sky-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
