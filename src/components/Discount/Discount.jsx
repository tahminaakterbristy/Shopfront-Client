import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTruck, FaTag } from 'react-icons/fa';

const Discount = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-purple-300 to-pink-400 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Fade bottom>
          <h2 className="text-4xl font-extrabold text-white mb-10 tracking-wide">
            💜 Exclusive Discounts & Promotions 💖
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Promotion Card 1 */}
          <Zoom>
          <div
              className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-6 border border-white/20 transition-all transform hover:scale-105 cursor-pointer hover:shadow-purple-400"
              onClick={() => navigate('/freeshipping')}
            >
              <div className="text-white text-5xl mb-4"><FaTruck /></div>
              <h3 className="text-2xl font-semibold text-white mb-2">Free Shipping on Orders Over $50</h3>
              <p className="text-gray-800 mb-6">Shop now and enjoy free shipping on all orders above $50!</p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all">
                Shop Now
              </button>
            </div>
          </Zoom>

          {/* Promotion Card 2 */}
          <Zoom>
          <div
              className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-6 border border-white/20 transition-all transform hover:scale-105 cursor-pointer hover:shadow-purple-400"
              onClick={() => navigate('/discount-products')}
            >
              <div className="text-white text-5xl mb-4"><FaShoppingCart /></div>
              <h3 className="text-2xl font-semibold text-white mb-2">20% Off on First Order</h3>
              <p className="text-gray-800 mb-6">Sign up today and enjoy 20% off your first purchase!</p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-400 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all">
                Get Discount
              </button>
            </div>
           
          </Zoom>

          {/* Promotion Card 3 */}
          <Zoom>
            <div
              className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-6 border border-white/20 transition-all transform hover:scale-105 cursor-pointer hover:shadow-purple-400"
            >
              <div className="text-white text-5xl mb-4"><FaTag /></div>
              <h3 className="text-2xl font-semibold text-white mb-2">Seasonal Sale: Up to 50% Off</h3>
              <p className="text-gray-800 mb-6">Don’t miss out on our seasonal sale! Limited time only!</p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all">
                View Sale
              </button>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Discount;
