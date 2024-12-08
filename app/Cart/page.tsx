import React from 'react'
import '../globals.css'
import Image from 'next/image';
import bottle from '../Images/bottle.png';
import grass from '../Images/grass.png';

export default function Cart() {
  return (
<>


<div className="shopping-cart">
  <h2>Your shopping cart</h2> 

  <div className="cart-items">
  <div className="cart-header flex items-center justify-between w-full p-4 bg-gray-100 rounded-t-lg">
    <h5 className="w-1/4 text-center font-semibold">Product</h5>
    <h5 className="w-1/2 text-center font-semibold">Details</h5>
    <h5 className="w-1/6  font-semibold">Quantity</h5>
    <h5 className="w-1/6 text-center font-semibold">Total</h5>
  </div>
    {/* Cart Item 1 */}
    <div className="cart-item flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="product-image w-1/4">
        <Image 
          src={bottle} 
          alt="Graystone vase" 
          style={{ width: '100%', height: 'auto' }} 
        />
        <div className="dimensions text-sm mt-2 text-center">55 x 20</div>
      </div>
      
      <div className="product-details w-1/2 pl-4">
        <h4 className="font-semibold text-lg text-center">Graystone vase</h4>
        <p className="text-gray-600 text-center">A timeless ceramic vase with a tri-color grey glaze.</p>
        <p className="font-semibold text-lg text-center">£85</p>
      </div>
      
      <div className="quantity w-1/6">
        <input type="number" value="1" className="w-full border rounded px-2 py-1 text-center" />
      </div>
      
      <div className="total w-1/6 text-lg font-semibold text-center">
        £85
      </div>
    </div>

    {/* Cart Item 2 */}
    <div className="cart-item flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="product-image w-1/4">
        <Image 
          src={grass} 
          alt="Besio white vase" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
      
      <div className="product-details w-1/2 pl-4">
        <h4 className="font-semibold text-lg text-center">Besio white vase</h4>
        <p className="text-gray-600 text-center">Beautiful and simple, this is one for the classics.</p>
        <p className="font-semibold text-lg text-center">£85</p>
      </div>
      
      <div className="quantity w-1/6">
        <input type="number" value="1" className="w-full border rounded px-2 py-1 text-center" />
      </div>
      
      <div className="total w-1/6 text-lg font-semibold text-center">
        £125
      </div>
    </div>
  </div>

  {/* Section Headers */}


</div>


      <div className="cart-summary">
        <p>Subtotal: £210</p>
        <p>Taxes and shipping are calculated at checkout</p>
        <button>Go to checkout</button>
      </div>

    </>
  );
};



