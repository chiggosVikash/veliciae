'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-5xl font-bold text-onPrimary mb-12 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-onPrimary mb-6">Send Us a Message</h2>
            <div className="mb-6">
              <label htmlFor="name" className="block text-onSurface mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-onSurface mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-onSurface mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-md bg-background text-onBackground focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-accent text-onPrimary px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-md transform hover:scale-105">
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="bg-surface p-8 rounded-lg shadow-xl h-full">
            <h2 className="text-3xl font-semibold text-onPrimary mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-center">
                <FaEnvelope className="text-accent text-3xl mr-6" />
                <div>
                  <p className="text-onSurface font-medium">Email</p>
                  <p className="text-onPrimary text-lg">support@elegantjewelry.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-accent text-3xl mr-6" />
                <div>
                  <p className="text-onSurface font-medium">Phone</p>
                  <p className="text-onPrimary text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-accent text-3xl mr-6" />
                <div>
                  <p className="text-onSurface font-medium">Address</p>
                  <p className="text-onPrimary text-lg">123 Elegant Street, Jewel City, JC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="text-accent text-3xl mr-6" />
                <div>
                  <p className="text-onSurface font-medium">Business Hours</p>
                  <ul className="text-onPrimary">
                    <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                    <li>Saturday: 10:00 AM - 6:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-semibold text-onPrimary mb-8 text-center">Find Us on the Map</h2>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/map-placeholder.jpg"
            alt="Map location"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
