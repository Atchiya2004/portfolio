import React from 'react';
import { Link } from 'react-router-dom';

function Google() {
  return (
    <>
      <a
        href="https://accounts.google.com/signin"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-3 border border-gray-300 rounded-md px-5 py-2 hover:shadow-md transition-shadow duration-300 w-full max-w-sm mx-auto mt-6 bg-white"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 533.5 544.3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.6H272v95.8h146.9c-6.4 34.7-25.6 64.2-54.6 84v69h88.3c51.7-47.7 81.9-118 81.9-198.2z"
            fill="#4285F4"
          />
          <path
            d="M272 544.3c73.7 0 135.6-24.3 180.8-66.2l-88.3-69c-24.5 16.5-56 26.1-92.5 26.1-71 0-131.3-47.8-152.9-112.1h-90.6v70.5c45.6 89.9 139 150.7 243.5 150.7z"
            fill="#34A853"
          />
          <path
            d="M119.1 326.1c-10.7-31.7-10.7-66 0-97.7v-70.5h-90.6c-38.8 75.9-38.8 165.8 0 241.7l90.6-73.5z"
            fill="#FBBC05"
          />
          <path
            d="M272 107.7c39.9 0 75.7 13.7 103.8 40.7l77.8-77.8C397.3 24.9 339.2 0 272 0 167.5 0 74 60.8 28.3 150.7l90.6 70.5c21.7-64.3 81.9-112.1 152.9-112.1z"
            fill="#EA4335"
          />
        </svg>
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </a>

      <Link to="/account" className="text-blue-600 underline mt-4 block text-center">
        Go to Account
      </Link>
    </>
  );
}

export default Google;
