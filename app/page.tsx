import Link from "next/link";
import Image from 'next/image';
import Features from "./components/Features";
import "./globals.css";
import RightImage from './Images/Right Image.png';
import sofa from './Images/sofa.png';
import banner1 from './Images/banner-1.png';
import black from './Images/black.png';
import bottom from './Images/bottom.png';
import Images from "./components/images";

export default function Home() {
  return (
    <>
      <section className="banner py-8 px-4 md:px-16 lg:px-32">
        <div className="text-section max-w-2xl mx-auto text-center md:text-left">
          <h1 className="title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Furniture Brand for the <br /> Future, with Timeless Designs
          </h1>
          <button className="view-collection-button bg-blue-600 text-white py-2 px-6 rounded-lg mb-4 md:mb-0">
            View Collection
          </button>
          <p className="description text-sm md:text-base text-gray-700 max-w-xl mx-auto md:mx-0">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand.
            With nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>
        <div className="image-section mt-8 md:mt-0">
          <Image
            src={RightImage}
            alt="Right Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <Features />

      <div className="ceramics text-center my-10 font-bold text-xl">New Ceramics</div>
      <Images />

      <div className="popular text-center font-bold text-xl my-10">Our Popular Products</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card shadow-lg rounded-lg overflow-hidden">
            <Image src={sofa} alt="Sofa" className="w-full h-72 object-cover" />
            <div className="card-body p-4">
              <h5 className="card-title text-lg font-semibold">The Popular Suede Sofa</h5>
              <p className="card-text text-gray-600">Price: £980</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card shadow-lg rounded-lg overflow-hidden">
            <Image src={banner1} alt="The Dandy Chair" className="w-full h-72 object-cover" />
            <div className="card-body p-4">
              <h5 className="card-title text-lg font-semibold">The Dandy Chair</h5>
              <p className="card-text text-gray-600">Price: £250</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card shadow-lg rounded-lg overflow-hidden">
            <Image src={black} alt="Black Chair" className="w-full h-72 object-cover" />
            <div className="card-body p-4">
              <h5 className="card-title text-lg font-semibold">The Black Chair</h5>
              <p className="card-text text-gray-600">Price: £250</p>
            </div>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="view-collection-button1 bg-blue-600 text-white py-2 px-6 rounded-lg">
            View Collection
          </button>
        </div>
      </div>

      {/* Join the Club Section */}
      <section className="flex flex-col items-center text-center py-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Club and Get the Benefits</h2>
        <p className="mt-4 text-sm text-gray-500 mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>

        {/* Sign Up Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            className="signup-input py-2 px-4 border rounded-lg w-full sm:w-auto"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="signup-button bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* Studio to Global Brand Section */}
      <section className="flex flex-col sm:flex-row items-center justify-between py-16 px-4 lg:px-16">
        <div className="text-container w-full sm:w-1/2 px-8 text-center sm:text-left mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">From a Studio in London to a Global Brand</h2>
          <h3 className="text-xl font-semibold mb-6">With Over 400 Outlets</h3>
          <p className="text-lg mb-4 text-justify">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className="text-lg mb-4 text-justify">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>

        <div className="image-container w-full sm:w-1/2 px-8">
          <Image
            src={bottom}
            alt="Studio to Global"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}
