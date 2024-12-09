import React from 'react';
import Image from 'next/image';
import '../globals.css';
import banner1 from '../Images/banner-1.png';
import banner2 from '../Images/banner-2.png';
import banner3 from '../Images/banner-3.png';
import banner4 from '../Images/banner-4.png';

export default function Images() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <Image 
              src={banner1} 
              alt="The Dandy Chair" 
              className="w-full h-64 object-cover" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold text-gray-800">The Dandy Chair</h5>
              <p className="text-gray-600">Price: £250</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <Image 
              src={banner2} 
              alt="Rustic Vase Set" 
              className="w-full h-64 object-cover" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold text-gray-800">Rustic Vase Set</h5>
              <p className="text-gray-600">Price: £155</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <Image 
              src={banner3} 
              alt="The Silky Vase" 
              className="w-full h-64 object-cover" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold text-gray-800">The Silky Vase</h5>
              <p className="text-gray-600">Price: £125</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <Image 
              src={banner4} 
              alt="The Lucy Lamp" 
              className="w-full h-64 object-cover" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold text-gray-800">The Lucy Lamp</h5>
              <p className="text-gray-600">Price: £399</p>
            </div>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300 transform hover:scale-105">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
}
