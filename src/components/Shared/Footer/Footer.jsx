import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-white-600">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Logo and About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Shop Front</h2>
            <p>
              Discover a wide range of products tailored for your needs. Shop with confidence and enjoy the best offers.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-black-400 font-bold hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-black-400 font-bold hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-black-400 font-bold hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">Shop</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Section 3: Customer Support */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-white">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">Return Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">Track Order</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Join Our Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <button className="btn bg-purple-500 w-full">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2024 Shopfront. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
