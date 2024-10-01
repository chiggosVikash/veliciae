'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // In a real application, you'd fetch this data from an API or local storage
    const mockWishlistItems = [
      { id: 1, name: 'Sapphire Necklace', price: 35000, image: '/path-to-image1.jpg' },
      { id: 2, name: 'Emerald Earrings', price: 28000, image: '/path-to-image2.jpg' },
      { id: 3, name: 'Ruby Bracelet', price: 42000, image: '/path-to-image3.jpg' },
    ];
    setWishlistItems(mockWishlistItems);
  }, []);

  const removeItem = (id) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl font-bold text-onPrimary mb-8 text-center">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-onSurface text-center text-lg">Your wishlist is empty. Start adding your dream jewelry!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-surface rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <Image src={item.image} alt={item.name} width={400} height={400} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-onPrimary mb-2">{item.name}</h2>
                <p className="text-onSurface text-lg mb-4">₹{item.price.toLocaleString()}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-accent text-onPrimary px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300 flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="text-red-500 p-2 hover:text-red-600 transition duration-300">
                    <FaHeart size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <Link href="/shop" className="bg-accent text-onPrimary px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-md inline-block">
          Continue Shopping
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Wishlist;
