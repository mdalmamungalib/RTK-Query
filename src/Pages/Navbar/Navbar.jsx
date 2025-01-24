import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BrandName
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-6 lg:flex">
          <Link
            to="/"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Users
          </Link>
          <Link
            to="/posts"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Posts
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="items-center hidden space-x-2 lg:flex">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block p-2 text-gray-600 lg:hidden hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white border-t lg:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
          >
            Users
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
