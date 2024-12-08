
import React from 'react';
import '../globals.css'; // Ensure this file contains your global styles
import Image from 'next/image';
import frame from '../Images/Frame.png';
import banner1 from '../Images/banner-1.png';
import banner2 from '../Images/banner-2.png';
import banner3 from '../Images/banner-3.png';
import banner4 from '../Images/banner-4.png';
import banner5 from '../Images/banner-5.png';
import banner6 from '../Images/banner-6.png';
import banner7 from '../Images/banner-7.png';
import banner8 from '../Images/banner-8.png';
import Images from '../components/images';

export default function Filter() {
  return (
    <>
<Image 
        src={frame} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
    <div className="filter-container">

      <div className="filter-section">
        <label htmlFor="category">Category:</label>
        <select id="category">
          <option value="">Select Category</option>
          <option value="furniture">Furniture</option>
          <option value="homeware">Homeware</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div className="filter-section">
        <label htmlFor="product-type">Product Type:</label>
        <select id="product-type">
          <option value="">Select Product Type</option>
          <option value="chairs">Chairs</option>
          <option value="tables">Tables</option>
          <option value="sofas">Sofas</option>
          <option value="lamps">Lamps</option>
        </select>
      </div>

      <div className="filter-section">
        <label htmlFor="price-range">Price Range:</label>
        <input
          id="price-range"
          type="text"
          placeholder="e.g., 100-500"
        />
      </div>

      <div className="filter-section">
        <label htmlFor="brand">Brand:</label>
        <select id="brand">
          <option value="">Select Brand</option>
          <option value="brand-a">Brand A</option>
          <option value="brand-b">Brand B</option>
          <option value="brand-c">Brand C</option>
          <option value="brand-d">Brand D</option>
        </select>
      </div>
    </div>

    <section>
        <div className="container">
          <div className="cards">
            {/* Card 1 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner1} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">The Dandy chair</h5>
               <p>Price:£250</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner2} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">Rustic Vase Set</h5>
               <p>Price:£155</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner3} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">The Silky Vase</h5>
               <p>Price:£125</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner4} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">The Lucy Lamp</h5>
               <p>Price:£399</p>
              </div>
            </div>

            {/* View Collection Button */}
           
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cards">
            {/* Card 1 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner5} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">The Dandy chair</h5>
               <p>Price:£250</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner6} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">Rustic Vase Set</h5>
               <p>Price:£155</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner7} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">The Silky Vase</h5>
               <p>Price:£125</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <Image 
        src={banner8} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
              <div className="card-body">
                <h5 className="card-title">The Lucy Lamp</h5>
               <p>Price:£399</p>
              </div>
            </div>

            {/* View Collection Button */}
           
          </div>
        </div>
      </section>

<Images/>
    </>
  );
}
