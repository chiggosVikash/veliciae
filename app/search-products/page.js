'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaHistory } from 'react-icons/fa';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Simulating fetching recent searches from local storage or API
    const sampleRecentSearches = ['Smartphone', 'Laptop', 'Headphones', 'Smart Watch'];
    setRecentSearches(sampleRecentSearches);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Add the search term to recent searches
      setRecentSearches(prevSearches => [searchTerm, ...prevSearches.slice(0, 4)]);
      // Here you would typically trigger the actual search functionality
      console.log('Searching for:', searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-onSurface">Search Products</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="w-full p-4 pr-12 text-onSurface bg-surfaceVariant rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-accent text-onPrimary p-2 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {recentSearches.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-onSurface flex items-center">
            <FaHistory className="mr-2" /> Recent Searches
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {recentSearches.map((search, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-surfaceVariant p-3 rounded-lg shadow-md cursor-pointer hover:bg-accent hover:text-onPrimary transition duration-300"
              >
                {search}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchProducts;
