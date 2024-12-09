import React from 'react';
import Image from 'next/image'; 
import '../globals.css';
import chair from '../Images/chair.png';
import Images from '../components/images';
import Features from '../components/Features';

export default function ProductDetails() {
  return (
    <>
      <section className="product-details">
        <div className="product-container">
          {/* Image Section */}
          <div className="image-section">
            <Image
              src={chair}
              alt="Dandy Chair with beech legs and lambskin leather upholstery"
              layout="intrinsic"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Description Section */}
          <div className="description-section">
            <h2 className="product-title">The Dandy Chair</h2>
            <p className="product-price">£250</p>

            <h3>Description</h3>
            <p className="product-description">
              A timeless design, with premium materials. The Dandy Chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>

            <h4>Features:</h4>
            <ul className="features-list">
              <li>Premium materials</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>

            <h4>Dimensions</h4>
            <div className="product-dimensions">
              <p><strong>Height:</strong> 110cm <strong>Width:</strong> 75cm <strong>Depth:</strong> 50cm</p>
            </div>

            <div className="quantity-container">
              <div className="quantity">
                <label htmlFor="quantity">Amount:</label>
                <input type="number" id="quantity" min="1" value="1" aria-label="Quantity" />
              </div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <div>You might also like</div>
      <Images />
      <Features />

      <section>
        <div className="container flex justify-center items-center flex-col text-center">
          <h2 className="text-xl font-bold text-gray-800 mt-10">
            Join the club and get the benefits
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>

          <div className="signup-container flex items-center mt-4">
            <input 
              type="email" 
              className="signup-input py-2 px-4 border rounded-lg w-full sm:w-auto" 
              placeholder="Enter your email" 
              aria-label="Enter your email for newsletter" 
            />
            <button 
              type="submit" 
              className="signup-button bg-blue-600 text-white py-2 px-6 rounded-lg ml-4"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
