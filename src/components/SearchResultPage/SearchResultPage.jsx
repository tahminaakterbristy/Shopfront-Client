import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { useCart } from "../CartContext/CartContext";

const SearchResultPage = () => {
  const { addToCart } = useCart();
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      const res = await axios.get(`https://shopfront-server.vercel.app/search?search=${query}`);
      setResults(res.data);
    };
    if (query) fetchResults();
  }, [query]);

  const handleAddToCart = async (product) => {
    if (!product) return; // Ensure product exists before proceeding

    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      rating: product.rating,
      quantity: 1,
    };

    const res = await fetch("https://shopfront-server.vercel.app/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItem),
    });

    const data = await res.json();
    if (data.insertedId) {
      Swal.fire({
        title: 'Added to Cart!',
        text: '✅ Your product was successfully added.',
        icon: 'success',
        confirmButtonText: 'Cool',
        confirmButtonColor: '#cc3399',
      });

      addToCart(cartItem);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{`Search Results for: ${query}`}</h2>
      
      {results.length === 0 ? (
        <p className="text-center text-red-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {results.map((product) => (
            <div key={product._id} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded-t-lg" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description.slice(0, 100)}...</p>
                <p className="text-blue-600 font-bold mt-2">Price: ${product.price}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-purple-700 transition"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
