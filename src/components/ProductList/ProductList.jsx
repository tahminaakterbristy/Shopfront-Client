// import { useEffect, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";


// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://shopfront-server.vercel.app/products'); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProducts(data); // Assuming data is an array of products
//       } catch (error) {
//         setError('Failed to fetch products');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
