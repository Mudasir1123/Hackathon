import React from 'react';
import { FaShippingFast, FaLeaf, FaTag, FaTools } from 'react-icons/fa';

export default function Features() {
  return (
    <section className="brand-differentiators py-16 bg-light-gray">
      <div className="features-wrapper text-center">
        <h2 className="section-title text-3xl sm:text-4xl font-semibold text-dark-gray mb-8">
          Why Our Brand Stands Out
        </h2>

        {/* Features Grid */}
        <div className="features-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <FaShippingFast className="feature-icon text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="feature-header text-xl font-semibold text-dark-gray mb-2">Fast Delivery</h3>
            <p className="feature-text text-medium-gray">
              Order before 3pm and receive your order the next day with standard delivery.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTools className="feature-icon text-4xl text-yellow-600 mb-4 mx-auto" />
            <h3 className="feature-header text-xl font-semibold text-dark-gray mb-2">Crafted by Experts</h3>
            <p className="feature-text text-medium-gray">
              Our products are hand-crafted with skill and passion by true artisans.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTag className="feature-icon text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="feature-header text-xl font-semibold text-dark-gray mb-2">Affordable Quality</h3>
            <p className="feature-text text-medium-gray">
              We offer the best prices for materials and quality that can't be beaten.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <FaLeaf className="feature-icon text-4xl text-green-700 mb-4 mx-auto" />
            <h3 className="feature-header text-xl font-semibold text-dark-gray mb-2">Eco-friendly Packaging</h3>
            <p className="feature-text text-medium-gray">
              Our packaging is 100% recycled, ensuring minimal environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
