import Link from 'next/link';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import React from 'react';
import "../globals.css";

export default function UniqueHeader() {
  return (
    <header className="unique-header bg-dark-blue text-white py-4">
      <div className="header-content mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="brand-logo text-3xl font-bold">
          <Link href="/" className="brand-link hover:text-gray-400">Avion</Link>
        </div>

        {/* Navigation Section */}
        <nav className="main-nav flex items-center space-x-8">
          {/* About Link */}
          <Link href="/About" className="nav-link flex items-center space-x-2 hover:text-gray-400 transition duration-200 ease-in-out">
            <span>About</span>
          </Link>

          {/* Profile Link */}
          <Link href="/profile" className="nav-link flex items-center space-x-2 hover:text-gray-400 transition duration-200 ease-in-out">
            <FaUserAlt className="nav-icon text-white" />
            <span>Profile</span>
          </Link>

          {/* Cart Link */}
          <Link href="/Cart" className="nav-link flex items-center space-x-2 hover:text-gray-400 transition duration-200 ease-in-out">
            <FaShoppingCart className="nav-icon text-white" />
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
