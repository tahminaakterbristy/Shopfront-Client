import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import logo from "../../assets/logo.svg.jpg";
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { useCart } from '../CartContext/CartContext';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart(); // ✅ Get cart items
  const cartItemCount = cart.length;
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const api1 = await axios.get('/books.json');
        const api2 = await axios.get('/electronic-products.json');
        const api3 = await axios.get('/fashion.json');
        const api4 = await axios.get('/groceries.json');
        const api5 = await axios.get('/homedecors.json');
        const api6 = await axios.get('/makeups.json');
        setAllProducts([...api1.data, ...api2.data, ...api3.data, ...api4.data, ...api5.data, ...api6.data]);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      navigate('/search', { state: { searchTerm, filteredProducts: filtered } });
    }
  };

  const handleSignOut = () => {
    logOut().catch(error => console.error(error));
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 object-cover mr-8 rounded-full shadow-lg" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
          <li><NavLink to="/" className="hover:text-pink-500 transition">Home</NavLink></li>
          <li><NavLink to="/ServiceRoute" className="hover:text-pink-500 transition">Service</NavLink></li>
         
          <li><NavLink to="/register" className="text-pink-500 transition">Register</NavLink></li>
        
          <li><NavLink to="/Coverage" className="hover:text-pink-500 transition">Coverage</NavLink></li>
          <li><Link to="/cart" className="relative flex items-center space-x-1">
           My Cart <FiShoppingCart className="text-xl mx-2" />
            
          </Link></li>
          <li><NavLink to="/myorder" className="hover:text-pink-500 transition flex items-center gap-1">Order History</NavLink></li>
        </ul>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-sm mx-5">
          <input
            type="text"
            className="input input-bordered w-full pl-10 pr-3 py-2 rounded-full focus:ring-pink-500 focus:border-pink-500"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleSearchSubmit}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* User Info & Auth */}
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL}
              className="w-10 h-10 rounded-full border-2 border-pink-500 shadow-lg cursor-pointer"
              alt="User"
              onClick={() => navigate("/update-profile")}
            />
            <p className="text-sm font-medium text-gray-700 hidden lg:block">{user.displayName}</p>
            <button
              onClick={handleSignOut}
              className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition flex items-center gap-2"
            >
              <MdLogout /> Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
