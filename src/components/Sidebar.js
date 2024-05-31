import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import "tailwindcss/tailwind.css"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col">
      <div className="p-4">
        <Profile />
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          <li>
            <Link to="/dashboard" className="block p-4 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/settled-loans" className="block p-4 hover:bg-gray-700">
              Settled Loans
            </Link>
          </li>
          <li>
            <Link to="/operations" className="block p-4 hover:bg-gray-700">
              Operations
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
