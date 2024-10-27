'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaCalendarAlt, FaDollarSign, FaTruck, FaListAlt } from 'react-icons/fa';

const OrderDetails = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch order details from API or load from state management
    // This is a placeholder. Replace with actual data fetching logic
    setOrder({
      id: 1,
      date: '2023-05-15',
      total: 89.99,
      status: 'Delivered',
      items: [
        { id: 1, name: 'Product A', quantity: 2, price: 29.99 },
        { id: 2, name: 'Product B', quantity: 1, price: 30.01 },
      ],
      shippingAddress: '123 Main St, City, Country, 12345',
    });
  }, []);

  if (!order) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-onPrimary mb-8 text-center">Order Details</h1>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-surface p-6 rounded-lg shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center mb-2">
              <FaBox className="text-accent mr-2" />
              <span className="font-semibold text-onSurface">Order #{order.id}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="text-accent mr-2" />
              <span className="text-onSurface">{order.date}</span>
            </div>
            <div className="flex items-center">
              <FaDollarSign className="text-accent mr-2" />
              <span className="font-semibold text-onSurface">${order.total.toFixed(2)}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <FaTruck className="text-accent mr-2" />
              <span className="font-semibold text-onSurface">Shipping Address:</span>
            </div>
            <p className="text-onSurface ml-6">{order.shippingAddress}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <FaListAlt className="text-accent mr-2" />
            <span className="font-semibold text-onSurface text-xl">Order Items</span>
          </div>
          <div className="bg-background rounded-lg p-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2 last:mb-0">
                <span className="text-onBackground">{item.name} (x{item.quantity})</span>
                <span className="text-onBackground font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-onSurface font-semibold">Total:</span>
          <span className="text-onSurface font-bold text-xl">${order.total.toFixed(2)}</span>
        </div>
        <div className="mt-6">
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
            order.status === 'Processing' ? 'bg-yellow-200 text-yellow-800' :
            'bg-blue-200 text-blue-800'
          }`}>
            {order.status}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderDetails;
