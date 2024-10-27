'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [cart, setCart] = useState([
    { id: 1, name: 'Product A', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product B', price: 39.99, quantity: 1 },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order placed:', formData);
    // Reset form and cart after submission
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-onPrimary mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-onPrimary mb-6">Shipping Information</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-onSurface mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-onSurface mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-onSurface mb-2 font-medium">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-onSurface mb-2 font-medium">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-onSurface mb-2 font-medium">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                  required
                />
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-onPrimary mb-6 mt-8">Payment Information</h2>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-onSurface mb-2 font-medium">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="expiryDate" className="block text-onSurface mb-2 font-medium">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-onSurface mb-2 font-medium">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300 border border-accent"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-accent text-onPrimary px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-md transform hover:scale-105">
              Place Order
            </button>
          </form>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="bg-surface p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-onPrimary mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span className="text-onSurface">{item.name} (x{item.quantity})</span>
                  <span className="text-onSurface font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-accent pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-onSurface font-medium">Subtotal</span>
                <span className="text-onSurface font-medium">${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-onSurface">Shipping</span>
                <span className="text-onSurface">Free</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-onSurface">Total</span>
                <span className="text-accent">${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Checkout;
