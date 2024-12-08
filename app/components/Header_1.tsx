import Link from 'next/link';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'; // Import icons
import React from 'react';
import "../globals.css";

export default function Header_1() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/">Avion</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          {/* About Link */}
          <Link href="/About" className="flex items-center space-x-2 hover:text-gray-400 transition duration-200 ease-in-out">
            <span>About</span>
          </Link>

          {/* Profile Link */}
          <Link href="/profile" className="flex items-center space-x-2 hover:text-gray-400 transition duration-200 ease-in-out">
            <FaUserAlt className="text-white" />
            <span>Profile</span>
          </Link>

          {/* Cart Link */}
          <Link href="/Cart" className="flex items-center space-x-2 hover:text-gray-400 transition duration-200 ease-in-out">
            <FaShoppingCart className="text-white" />
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
