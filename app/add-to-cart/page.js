'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // In a real application, you'd fetch this data from an API or local storage
    const mockCartItems = [
      { id: 1, name: 'Diamond Ring', price: 25000, quantity: 1, image: '/path-to-image1.jpg' },
      { id: 2, name: 'Gold Necklace', price: 50000, quantity: 1, image: '/path-to-image2.jpg' },
    ];
    setCartItems(mockCartItems);
  }, []);

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

  return (
    <div className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-onPrimary mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-onSurface">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-accent py-4">
              <div className="flex items-center">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
                <div>
                  <h2 className="text-lg font-semibold text-onPrimary">{item.name}</h2>
                  <p className="text-onSurface">₹{item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="text-accent p-1">
                  <FaMinus />
                </button>
                <span className="mx-2 text-onSurface">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="text-accent p-1">
                  <FaPlus />
                </button>
                <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 p-1">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold text-onPrimary">Total: ₹{total.toLocaleString()}</p>
            <div className="mt-4 flex space-x-4">
              <Link href="/checkout" className="bg-accent text-onPrimary px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
                Proceed to Checkout
              </Link>
              <Link href="/browse-products" className="bg-surface text-onSurface px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
