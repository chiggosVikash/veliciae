'use client';
import React, { useState, useEffect } from 'react';
import {  FaShoppingCart, FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import WishlistProduct from '../assets/wishlist-product.png';
import Heart from '../assets/heart.png';
import { Baskervville } from 'next/font/google';
import { MdElectricBolt } from "react-icons/md";
import PageHeader from '../Components/PageHeader';


const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
});


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
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto mb-24"
    >
      <PageHeader header="In Your Wishlist" icon={Heart}/>
      {wishlistItems.length === 0 ? (
        <p className="text-onSurface text-center text-lg">Your wishlist is empty. Start adding your dream jewelry!</p>
      ) : (
        <div className="md:mt-12 mt-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
          {wishlistItems.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white py-2 lg:px-0 px-2 relative lg:flex  lg:items-center  items-start rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="lg:pl-4 ">
                <img src={WishlistProduct.src} alt={item.name} className="w-full lg:h-40 h-28 sm:h-44 object-cover" />
                <div className="absolute top-4 right-4">
                  <button onClick={() => removeItem(item.id)} className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600 transition duration-300">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="lg:px-4 lg:py-0 py-2">
                <h2 className="sm:text-lg  text-sm font-semibold  text-onPrimary mb-1">{item.name}</h2>
                <h3 className="sm:text-sm text-xs text-gray-500 mb-1">From Veliciae Women Collection</h3>
                <p className="text-onPrimary text-lg lg:mb-4 ">₹{item.price.toLocaleString()}</p>
                <div className=" lg:flex hidden justify-between items-center">
                  <button className="whitespace-nowrap bg-accent text-onPrimary px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="whitespace-nowrap mx-4 bg-onPrimary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center">
                    <MdElectricBolt className="mr-2" />
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {/* <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <Link href="/shop" className="bg-accent text-onPrimary px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-md inline-block">
          Continue Shopping
        </Link>
      </motion.div> */}
    </motion.div>
  );
};

export default Wishlist;
