import React from 'react';
import { FaShippingFast, FaLeaf, FaTag, FaTools } from 'react-icons/fa';

export default function Features() {
  return (
    <section className="features py-16 bg-gray-50">
      <div className="features-container text-center">
        <h2 className="features-heading text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
          What makes our brand different
        </h2>

        {/* Features Grid */}
        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg text-center">
            <FaShippingFast className="feature-icon text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="feature-title text-xl font-semibold text-gray-800 mb-2">Next day as standard</h3>
            <p className="feature-description text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTools className="feature-icon text-4xl text-yellow-600 mb-4 mx-auto" />
            <h3 className="feature-title text-xl font-semibold text-gray-800 mb-2">Made by true artisans</h3>
            <p className="feature-description text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTag className="feature-icon text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="feature-title text-xl font-semibold text-gray-800 mb-2">Unbeatable prices</h3>
            <p className="feature-description text-gray-600">
              For our materials and quality, you won’t find better prices anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg text-center">
            <FaLeaf className="feature-icon text-4xl text-green-700 mb-4 mx-auto" />
            <h3 className="feature-title text-xl font-semibold text-gray-800 mb-2">Recycled packaging</h3>
            <p className="feature-description text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
