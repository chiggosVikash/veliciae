'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaCity, FaFlag } from 'react-icons/fa';
import AddressGrid from './AddressGrid';
import { useAddressStore } from '../stores/adressStore';
import { useSession } from 'next-auth/react';

const addressJson = {
  name: '',
  phone: '',
  pincode: '',
  area: '',
  streetLocality: '',
  flatNumber: '',
  landmark: '',
  city: '',
  state: '',
  addressType: 'home'
}

const AddAddress = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newAddress, setNewAddress] = useState(addressJson);
  const {data: session, status} = useSession();

  const {getAddresses,addresses,isProcessed,isProcessing,saveAddress,deleteAddress,setDefaultAddress} = useAddressStore();

  useEffect(() => {
    // Simulating fetching addresses
    setIsLoading(true);
    // Replace this with your actual data fetching logic
    if(status === 'authenticated'){
      getAddresses(session.user.email);
    }
  }, [status]);

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAdding(false);
    saveAddress(newAddress,session.user.email);
    setNewAddress(addressJson);
  };

  const inputFields = [
    { name: 'name', label: 'Name', icon: FaUser, type: 'text' },
    { name: 'phone', label: 'Phone No', icon: FaPhone, type: 'tel' },
    { name: 'pincode', label: 'Pincode', icon: FaMapMarkerAlt, type: 'text' },
    { name: 'area', label: 'Area', icon: FaMapMarkerAlt, type: 'text' },
    { name: 'streetLocality', label: 'Street/Locality', icon: FaMapMarkerAlt, type: 'text' },
    { name: 'flatNumber', label: 'Flat Number', icon: FaHome, type: 'text' },
    { name: 'landmark', label: 'Landmark', icon: FaMapMarkerAlt, type: 'text' },
    { name: 'city', label: 'City', icon: FaCity, type: 'text' },
    { name: 'state', label: 'State', icon: FaFlag, type: 'text' },
  ];

  if (isProcessing) {
    return (
      <div className="w-full mx-auto p-8 bg-surface rounded-xl shadow-2xl flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-8 bg-surface rounded-xl "
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-onSurface">My Address</h2>
      
      <AddressGrid addresses={addresses} setIsAdding={setIsAdding} deleteAddress={deleteAddress} setDefaultAddress={setDefaultAddress}/> 
      {isAdding && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputFields.map((field) => (
              <div key={field.name} className="relative">
                <label htmlFor={field.name} className="block text-sm font-medium text-onSurfaceVariant mb-1">{field.label}</label>
                <div className="relative">
                  <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={newAddress[field.name]}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 bg-surfaceVariant text-onSurfaceVariant rounded-lg focus:ring-2 focus:ring-accent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-onSurfaceVariant mb-2">Address Type</label>
            <div className="flex space-x-4">
              {['home', 'work', 'other'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value={type}
                    checked={newAddress.addressType === type}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-onPrimary text-white rounded-md font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out"
            >
              Save Address
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-6 py-3 bg-transparent text-onSurface rounded-md font-semibold border border-accent hover:bg-accent hover:text-onPrimary transition duration-300 ease-in-out"
            >
              Cancel
            </motion.button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default AddAddress;
