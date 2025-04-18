import { Fade } from "react-awesome-reveal";
import { useLocation } from "react-router-dom";



const SearchResultPage = () => {
  const location = useLocation();
  const { searchTerm, filteredProducts } = location.state || { searchTerm: '', filteredProducts: [] };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{searchTerm}"</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Fade bottom key={product.id}>
              <div className="product-card bg-white shadow-md rounded p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </Fade>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
