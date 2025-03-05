"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "../(context)/CartContext";
import Image from "next/image";

const Page = () => {
  const { cart, setCart } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCode, setAppliedCode] = useState("");
  const [error, setError] = useState("");

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    return subtotal - (subtotal * discount);
  };

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();
    setError("");
    
    if (!code) {
      setError("Please enter a promo code");
      return;
    }

    if (code === "SAVE20") {
      setDiscount(0.2);
      setAppliedCode("SAVE20");
    } else if (code === "MO-1") {
      setDiscount(0.35);
      setAppliedCode("MO-1");
    } else {
      setDiscount(0);
      setAppliedCode("");
      setError("This promo code is not valid. Please try SAVE20 or MO-1");
    }
  };

  return (
    <div className="min-h-screen bg-black py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E7F0DC] mb-6 text-center">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-8 bg-black rounded-lg shadow-lg">
            <p className="text-[#E7F0DC] text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="bg-black rounded-lg shadow-xl">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center p-4 sm:p-6 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors">
                <div className="w-24 h-24 sm:w-28 sm:h-28 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.img.url}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-0 sm:ml-6 flex-grow text-center sm:text-left mt-4 sm:mt-0">
                  <h2 className="text-xl font-semibold text-[#E7F0DC] mb-2">{item.title}</h2>
                  <p className="text-gray-400 text-sm mb-2 line-clamp-2">{item.description}</p>
                  <p className="text-xl font-bold text-[#597445]">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 sm:mt-0 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="p-6 border-t border-black">
              <div className="mb-4">
                <p className="text-[#E7F0DC] text-sm mb-2">Available Promo Codes:</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-[#597445]/20 rounded-full text-xs text-[#E7F0DC]">SAVE20 (20% OFF)</span>
                  <span className="px-3 py-1 bg-[#597445]/20 rounded-full text-xs text-[#E7F0DC]">MO-1 (35% OFF)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="w-full px-4 py-2 bg-lime-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#597445]"
                  />
                  {error && (
                    <div className="mt-2 p-4 bg-gradient-to-r from-red-500/30 to-red-500/10 rounded-lg border border-red-500/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#E7F0DC] font-semibold">
                            {error}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="sm:self-start">
                  <button
                    onClick={applyDiscount}
                    className="w-full px-6 py-2 bg-[#597445] text-white rounded-lg hover:bg-[#597445]/80 transition-colors font-semibold"
                  >
                    Apply Code
                  </button>
                </div>
              </div>
              
              {appliedCode && (
                <div className="mb-4 p-4 bg-gradient-to-r from-[#597445]/30 to-[#597445]/10 rounded-lg border border-[#597445]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#E7F0DC] font-semibold">
                        Promo code <span className="text-[#7ca761]">{appliedCode}</span> applied!
                      </p>
                      <p className="text-[#E7F0DC]/80 text-sm">
                        You're saving {(discount * 100).toFixed(0)}% on your order
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-[#7ca761]">
                      {(discount * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-[#E7F0DC]">Total:</span>
                <span className="text-2xl font-bold text-[#597445]">${calculateTotal().toFixed(2)}</span>
              </div>

              <button
                className="w-full py-3 bg-[#597445] text-white rounded-lg hover:bg-[#597445]/80 transition-colors text-lg font-semibold"
                onClick={() => console.log('Proceed to checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
