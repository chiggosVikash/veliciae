"use client"
import React, { useState } from 'react';
import SignupJewelry from '../assets/signup-jewelry.jpg'
import Logo from '../assets/velciae_logo.png';
import { FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { callbackUrl: "/", redirect: false });
      if (result.error) {
        toast.error("Failed to sign in with Google");
      } else {
        toast.success("Successfully signed in with Google");
        router.push("/"); // Redirect to home page or dashboard
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during sign in");
    }
  }

  const handlePhoneSignIn = async (e) => {
    e.preventDefault();
    // Implement phone number sign in logic here
    // For example:
    try {
      const result = await signIn("credentials", {
        phoneNumber,
        redirect: false,
      });
      if (result.error) {
        toast.error("Invalid phone number or OTP");
      } else {
        toast.success("Successfully signed in");
        router.push("/"); // Redirect to home page or dashboard
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during sign in");
    }
  }

  return (
    <div className="md:pt-[calc(100px+55px)] pt-[100px] flex items-center justify-center min-h-screen bg-gradient-to-r from-primary to-[#f0e6d2] p-4">
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
            <h1 className="text-4xl font-bold text-white text-center">Welcome Back</h1>
          </div>
        </div>
        
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <img src={Logo.src} alt="Veliciae Logo" className="w-36 h-32 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-6 text-onPrimary text-center">Sign In</h2>
          <form className="space-y-4" onSubmit={handlePhoneSignIn}>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                +91
              </span>
              <input
                type="tel"
                className="rounded-none rounded-r-lg bg-slate-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:ring-[#bc8e56] focus:border-[#bc8e56]"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#bc8e56] bg-gray-100 border-gray-300 rounded focus:ring-[#bc8e56]"
              />
              <label className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-onPrimary text-white p-3 rounded-md font-medium hover:bg-[#a47145] transition duration-300"
            >
              Request OTP
            </motion.button>
          </form>
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:shadow-md transition duration-300"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="w-5 h-5 mr-2 text-onPrimary" />
            Continue with Google
          </motion.button>
          <p className="mt-6 text-xs text-center text-gray-600">
            By continuing, I agree to the <a href="#" className="text-onPrimary hover:underline">Terms of Use</a> & <a href="#" className="text-onPrimary hover:underline">Privacy Policy</a>.
          </p>
          <p className="mt-4 text-sm text-center">
            Don't have an account? <Link href="/signup" className="text-secondary hover:underline">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
