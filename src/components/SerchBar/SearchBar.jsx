import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle Search (Navigate to results page)
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      // Navigate to search results page
      navigate(`/search-results?query=${searchTerm}`);
    }
  };

  return (
    <div className="relative max-w-xl mx-auto py-6">
      <form onSubmit={handleSearch} className="flex items-center border-2 border-pink-500 rounded-full overflow-hidden shadow-lg bg-white">
        <FiSearch className="absolute left-4 text-pink-500" size={20} />
        <input
          type="text"
          className="w-full pl-12 pr-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
