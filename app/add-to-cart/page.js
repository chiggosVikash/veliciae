'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductImage1 from '../assets/productimage1.png'
import { useCartStore } from '../stores/cartStore';
import { useSession } from 'next-auth/react';
import Loader from '../Components/Loader';
const AddToCart = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const {getCartItems,cartItems, isLoading, error} = useCartStore()
  const {data:session,status} = useSession()
  useEffect(() => {
    if(status === 'authenticated') getCartItems(session?.user?.email)
  }, [status]);

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  if(isLoading) return <div className='flex justify-center items-center h-screen'><Loader /></div>
  if(error) return <div className='flex justify-center items-center h-screen'>Error: {error}</div>

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl font-bold text-onPrimary mb-8 text-center">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-onSurface text-center text-lg">Your cart is empty. Let's add some sparkle!</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.map((item) => (
              <motion.div 
                key={item.id} 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between border-b border-accent py-6 hover:bg-surface hover:bg-opacity-50 transition duration-300 rounded-lg mb-4"
              >
                <div className="flex items-center px-8 ">
                  <Image src={ProductImage1.src} alt={item.name} width={100} height={100} className="rounded-md mr-6 shadow-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-onPrimary">{item.name}</h2>
                    <p className="text-onSurface text-lg">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, -1)} className="text-accent p-2 hover:bg-accent hover:text-onPrimary rounded-full transition duration-300">
                    <FaMinus />
                  </button>
                  <span className="mx-4 text-onSurface text-lg">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="text-accent p-2 hover:bg-accent hover:text-onPrimary rounded-full transition duration-300">
                    <FaPlus />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-6 text-red-500 p-2 hover:bg-red-500 hover:text-white rounded-full transition duration-300">
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:w-1/3 bg-surface p-8 rounded-lg shadow-lg h-fit"
          >
            <h2 className="text-2xl font-semibold text-onPrimary mb-6">Price Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <p className="text-onSurface">{item.name} (x{item.quantity})</p>
                <p className="text-onPrimary font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
            <div className="border-t border-accent mt-4 pt-4">
              <p className="text-xl font-semibold text-onPrimary mb-6">Total: ₹{total.toLocaleString()}</p>
            </div>
            <Link href="/checkout" className="bg-accent text-onPrimary px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-center text-lg font-semibold shadow-md w-full block">
              Proceed to Checkout
            </Link>
          </motion.div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-surface p-4 shadow-lg md:hidden">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-semibold text-onPrimary">Total: ₹{total.toLocaleString()}</p>
          <Link href="/checkout" className="bg-accent text-onPrimary px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 text-center text-base font-semibold shadow-md">
            Checkout
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AddToCart;
