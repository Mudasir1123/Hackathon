import React from 'react';
import '../globals.css'; // Import the global CSS file
import yellow from '../Images/yellow.png';
import about from '../Images/about.png';
import Image from 'next/image';
import Features from '../components/Features';
export default function About() {
  return (
    <>
      <section className="banner2">
        {/* Text Section */}
        <div className="text-section">
          <h1>
            A brand built on the love of craftsmanship, quality, and outstanding customer service
          </h1>
        </div>

        {/* Button Section */}
        <div className="button-section">
          <button>View our products</button>
        </div>
      </section>




      <section className="banner1">
  <div className="text-section">
    <h1 className="title">
      The Furniture Brand for the <br /> Future, with Timeless Designs
    </h1>
    <button className="view-collection-button">View Collection</button>
  </div>
  <div className="image-section">
    <Image 
      src={yellow} 
      alt="Right Image" 
      style={{ width: '100%', height: '100%' }} 
    />
  </div>
</section>
      

<section className="about-section">
      {/* Image Section */}
      <div className="image-container">
      <Image 
      src={about} 
      alt="Right Image" 
      style={{ width: '100%', height: '100%' }} 
    />
      </div>

      {/* Content Section */}
      <div className="content-container">
        <h2 className="content-title">Our service isn’t just personal, it’s actually hyper personally exquisite</h2>
        <p className="content-text">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
          <br />
          <br />
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <button className="content-button">Get in touch</button>
      </div>
    </section>

      <Features/>

      <section>
        <div className="container flex justify-center items-center flex-col text-center"> {/* Flexbox applied here */}
          {/* "Join the club" Text */}
          <h2 className="text-xl font-bold text-gray-800 mt-10">
            Join the club and get the benefits
          </h2>

          {/* Description Text */}
          <p className="mt-4 text-sm text-gray-500">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>

          {/* Sign Up Button */}
          <div className="signup-container flex items-center">
  <input 
    type="email" 
    className="signup-input py-2 px-4 border rounded-lg w-full sm:w-auto" 
    placeholder="Enter your email" 
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
