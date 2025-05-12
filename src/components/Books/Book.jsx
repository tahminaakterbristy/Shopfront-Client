import { useContext, useEffect, useState } from "react";
import { useCart } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Books = () => {
  const { addToCart } = useCart();  
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://shopfront-server.vercel.app/books");
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  //  Add to Cart Function
  const handleAddToCart = async (book) => {
    if (!user || !user?.email) {
      alert('You have to log In to add to cart');
      navigate('/login');
      return;
    }

    const cartItem = {
      email: user?.email,
      bookId: book.id,
      name: book.name,
      image: book.image,
      price: book.price,
      rating: book.rating,
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
 
<section className="bg-gradient-to-b from-pink-50 to-white py-14">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">📚 Explore Our Book Collection</h2>
    <p className="text-gray-600 text-lg mb-10">Dive into a world of knowledge, adventure, and imagination.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-xl p-6 group transition duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <div className="absolute top-3 left-3  text-white text-xs font-bold px-2 py-1 rounded">
                ⭐ {book.rating}
              </div>
            </div>
  
            <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">{book.name}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>
  
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-purple-600">$ {book.price}</span>
              <button
                onClick={() => handleAddToCart(book)}
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

export default Books;
