import { useEffect, useState } from "react";


const SeasonalSale = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch('https://shopfront-server.vercel.app/seasonalSale')  // Ensure this is the correct path to your JSON file
      .then(response => response.json())
      .then(data => setProducts(data.filter(product => parseFloat(product.discount) >= 20)));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Seasonal Sale: Up to 50% Off</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-500 line-through">Previous Price: ${product.previous_price}</p>
              <p className="text-green-600 font-bold">Discounted Price: ${product.discounted_price}</p>
              <div className="flex justify-center mt-4">
                  <button
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalSale;
