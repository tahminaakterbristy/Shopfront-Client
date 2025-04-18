import axios from "axios";
import { useEffect, useState } from "react";


const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(""); // ক্যাটাগরি ফিল্টার
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/makeUps`, {
                    params: { query, category }
                });
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching search results", error);
            }
        };

        if (query.length > 0) {
            fetchProducts();
        }
    }, [query, category]);

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search for products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <select onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full mb-4">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
            </select>

            <div>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="border p-2 mb-2">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
