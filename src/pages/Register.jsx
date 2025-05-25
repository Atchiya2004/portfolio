import React from 'react';
import Google from '../components/Google';

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue to-white-200">
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Enter your Contact number"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      <Google />

      <p className="mt-6 text-center text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Login here
        </a>
      </p>
    </div>
    </div>
  );
}

export default Register;
