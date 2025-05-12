
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "/assets/logo.jpg";
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { useCart } from '../CartContext/CartContext';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SearchBar from '../SerchBar/SearchBar';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart();
  const cartItemCount = cart.length;
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut().catch(error => console.error(error));
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex justify-between items-center py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-14 h-14 object-cover mr-4 rounded-full shadow-lg" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm lg:text-base font-medium text-gray-700">
          <li><NavLink to="/" className="hover:text-pink-500 transition">Home</NavLink></li>
          <li><NavLink to="/services" className="hover:text-pink-500 transition">Service</NavLink></li>
          <li><NavLink to="/coverage" className="hover:text-pink-500 transition">Coverage</NavLink></li>
         
          <li><NavLink to="/register" className="text-pink-500 transition">Register</NavLink></li>
          
          <li>
            <Link to="/cart" className="relative flex items-center gap-1 hover:text-pink-500">
              My Cart <FiShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className="bg-pink-500 text-white text-xs rounded-full px-2 py-0.5 absolute -top-2 -right-3">{cartItemCount}</span>
              )}
            </Link>
          </li>
          <li><NavLink to="/myorder" className="hover:text-pink-500 transition">Order History</NavLink></li>
          <li><SearchBar /></li>
        </ul>

        {/* User Info */}
        {user ? (
          <div className="hidden md:flex flex-col items-center gap-1 ml-4">
            <img
              src={user.photoURL}
              className="w-10 h-10 rounded-full border-2 border-pink-500 shadow-lg cursor-pointer"
              alt="User"
              onClick={() => navigate("/update-profile")}
            />
            <p className="text-xs font-medium text-gray-700">{user.displayName}</p>
            <button
              onClick={handleSignOut}
              className="bg-pink-500 text-white px-3 py-1 rounded-full shadow hover:bg-pink-600 transition flex items-center gap-1 text-sm"
            >
              <MdLogout /> Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="hidden md:inline-block ml-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition">
              Login
            </button>
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-gray-700">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
          <NavLink to="/" className="block hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" className="block hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Service</NavLink>
          <NavLink to="/coverage" className="block hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Coverage</NavLink>
          <NavLink to="/register" className="block text-pink-500" onClick={() => setIsMenuOpen(false)}>Register</NavLink>
          
          <Link to="/cart" className="block hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>
            My Cart <FiShoppingCart className="inline-block ml-1" />
          </Link>
          <NavLink to="/myorder" className="block hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Order History</NavLink>
          <div className="pt-2"><SearchBar /></div>

          {user ? (
            <div className="flex flex-col items-start gap-2 pt-3 border-t">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full border-2 border-pink-500 shadow-lg"
                alt="User"
                onClick={() => {
                  navigate("/update-profile");
                  setIsMenuOpen(false);
                }}
              />
              <p className="text-sm text-gray-700">{user.displayName}</p>
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="bg-pink-500 text-white px-3 py-1 rounded-full shadow hover:bg-pink-600 transition flex items-center gap-1 text-sm"
              >
                <MdLogout /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition w-full text-center mt-3">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
