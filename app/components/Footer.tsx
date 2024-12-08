import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSkype, FaPinterest } from 'react-icons/fa';
import '../globals.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="footer-container max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Menu Section */}
          <div className="footer-section">
            <h3 className="footer-heading text-xl font-semibold mb-4">Menu</h3>
            <ul className="footer-links space-y-2">
              <li><Link href="/new-arrivals">New arrivals</Link></li>
              <li><Link href="/best-sellers">Best sellers</Link></li>
              <li><Link href="/recently-viewed">Recently viewed</Link></li>
              <li><Link href="/popular-this-week">Popular this week</Link></li>
              <li><Link href="/all-products">All products</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="footer-section">
            <h3 className="footer-heading text-xl font-semibold mb-4">Categories</h3>
            <ul className="footer-links space-y-2">
              <li><Link href="/categories/crockery">Crockery</Link></li>
              <li><Link href="/categories/furniture">Furniture</Link></li>
              <li><Link href="/categories/homeware">Homeware</Link></li>
              <li><Link href="/categories/plant-pots">Plant pots</Link></li>
              <li><Link href="/categories/chairs">Chairs</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3 className="footer-heading text-xl font-semibold mb-4">Our company</h3>
            <ul className="footer-links space-y-2">
              <li><Link href="/about-us">About us</Link></li>
              <li><Link href="/vacancies">Vacancies</Link></li>
              <li><Link href="/contact-us">Contact us</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/returns-policy">Returns policy</Link></li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="footer-section">
            <h3 className="footer-heading text-xl font-semibold mb-4">Join our mailing list</h3>
            <form className="footer-form">
              <input
                type="email"
                placeholder="your@email.com"
                className="footer-input py-2 px-4 w-full rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="footer-button bg-blue-600 text-white py-2 px-6 rounded-md mt-4 w-full sm:w-auto"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-gray-800 text-center py-4 mt-12">
        <p className="text-sm">Copyright 2022 Avion LTD</p>
        <div className="footer-socials mt-4 space-x-4 text-xl">
          <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <FaSkype className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaPinterest className="cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </footer>
  );
}
