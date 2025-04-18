import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useCart } from "../CartContext/CartContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Homedecor = () => {
 const { addToCart } = useCart();  // useCart থেকে addToCart ফাংশন নিয়ে আসা
   const [products, setProducts] = useState([]);
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();
   useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch("http://localhost:8000/homeDecor");
        const data = await response.json();
        setProducts(data);
      };
  
      fetchProducts();
    }, []);
  
    // 🛒 Add to Cart Function
    const handleAddToCart = async (product) => {
      if (!user || !user?.email) {
        alert('You have to log In to add to cart');
        navigate('/login');
        return;
      }
  
      const cartItem = {
        email: user?.email,
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        quantity: 1,
      };
  
     
      const res = await fetch("http://localhost:8000/carts", {
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
<section className="bg-gradient-to-b from-pink-50 to-white py-14">
  <Helmet>
                      <title>Shopfront | HomeDecor</title>
                    </Helmet>
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">🏡 Premium Home Decor Picks</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-xl p-6 group transition duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <div className="absolute top-3 left-3  text-white text-xs font-bold px-2 py-1 rounded">
                ⭐ {product.rating}
              </div>
            </div>
  
            <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
  
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-purple-600">$ {product.price}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-purple-700 transition"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Homedecor;
