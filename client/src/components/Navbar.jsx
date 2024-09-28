// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="text-white bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-3xl">Pragati</h1>
        <div className="hidden md:flex md:w-auto md:space-x-8" id="navbar-search">
          <div className="relative">
            <input type="text" className="block w-full p-2 ps-10 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-3" id="navbar-search">
        <input type="text" className="block w-full p-2 ps-10 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
