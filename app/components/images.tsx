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
          <div className="card bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={banner1} 
              alt="The Dandy chair" 
              className="w-full h-auto" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold">The Dandy chair</h5>
              <p className="text-gray-600">Price: £250</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={banner2} 
              alt="Rustic Vase Set" 
              className="w-full h-auto" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold">Rustic Vase Set</h5>
              <p className="text-gray-600">Price: £155</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={banner3} 
              alt="The Silky Vase" 
              className="w-full h-auto" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold">The Silky Vase</h5>
              <p className="text-gray-600">Price: £125</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={banner4} 
              alt="The Lucy Lamp" 
              className="w-full h-auto" 
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold">The Lucy Lamp</h5>
              <p className="text-gray-600">Price: £399</p>
            </div>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
}
