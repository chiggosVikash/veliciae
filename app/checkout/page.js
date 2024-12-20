'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../Components/PageHeader';
import ProductDetails from '../Components/ProductDetails';
import OrderSummary from '../Components/OrderSummary';

const CheckoutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto mb-24"
    >
      <PageHeader header="Checkout" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <ProductDetails />
          </div>
          <div className='md:ml-8 '>
            <OrderSummary />
          </div>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default CheckoutPage;
