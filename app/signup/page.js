'use client';
import SignupJewelry from '../assets/signup-jewelry.jpg';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="md:pt-[calc(80px+55px)] pt-[80px] flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f7f1e3] to-[#f0e6d2] p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            src={SignupJewelry.src}
            alt="Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">Join Our Jewelry Family</h1>
          </div>
        </div>
        
        {/* Sign-Up Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-semibold mb-6 text-onPrimary">Sign up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc8e56] transition duration-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc8e56] transition duration-300"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc8e56] transition duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc8e56] transition duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-onPrimary text-white p-3 rounded-md font-medium hover:bg-opacity-90 transition duration-300"
            >
              Sign Up
            </motion.button>
          </form>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 p-3 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:shadow-md transition duration-300"
          >
            <FaGoogle className="w-5 h-5 mr-2 text-onPrimary" />
            Sign up with Google
          </motion.button>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-sm text-gray-600">Already have an account?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm text-onPrimary font-medium hover:underline mx-4"
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
