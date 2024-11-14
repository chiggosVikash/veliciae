'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMapMarkerAlt } from 'react-icons/fa';
import { useAddressStore } from '../stores/adressStore';
const MyAddress = () => {
  // const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');

  const {getAddresses,addresses} = useAddressStore();

  useEffect(() => {
    // Fetch addresses from API or load from state management
    // This is a placeholder. Replace with actual data fetching logic
    // setAddresses([
    //   '123 Main St, City, Country, 12345',
    //   '456 Elm St, Town, Country, 67890',
    // ]);
    getAddresses()
  }, []);

  const handleAddAddress = (e) => {
    e.preventDefault();
    console.log(e)
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-onPrimary mb-8 text-center">My Addresses</h1>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-surface p-6 rounded-lg shadow-xl mb-8"
      >
        <h2 className="text-2xl font-semibold text-onSurface mb-4">Add New Address</h2>
        <form onSubmit={handleAddAddress} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Enter new address"
            className="flex-grow px-4 py-2 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
          />
          <button type="submit" className="bg-accent text-onPrimary px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-md transform hover:scale-105 flex items-center justify-center">
            <FaPlus className="mr-2" /> Add Address
          </button>
        </form>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-surface p-6 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-onSurface mb-4">My Addresses</h2>
        <div className="space-y-4">
          {addresses.map((address, index) => (
            <div key={index} className="flex items-start bg-background p-4 rounded-lg">
              <FaMapMarkerAlt className="text-accent mr-3 mt-1 flex-shrink-0" />
              <p className="text-onBackground">{address}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyAddress;
