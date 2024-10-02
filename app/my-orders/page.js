'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API or load from state management
    // This is a placeholder. Replace with actual data fetching logic
    setOrders([
      { id: 1, date: '2023-05-15', total: 89.99, status: 'Delivered' },
      { id: 2, date: '2023-05-20', total: 129.99, status: 'Processing' },
      { id: 3, date: '2023-05-25', total: 59.99, status: 'Shipped' },
    ]);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-onPrimary mb-8 text-center">My Orders</h1>
      <div className="grid gap-6">
        {orders.map((order) => (
          <motion.div 
            key={order.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-surface p-6 rounded-lg shadow-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <FaBox className="text-accent mr-2" />
                <span className="font-semibold text-onSurface">Order #{order.id}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-accent mr-2" />
                <span className="text-onSurface">{order.date}</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <FaDollarSign className="text-accent mr-2" />
                <span className="font-semibold text-onSurface">${order.total.toFixed(2)}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                order.status === 'Processing' ? 'bg-yellow-200 text-yellow-800' :
                'bg-blue-200 text-blue-800'
              }`}>
                {order.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyOrders;
