'use client';
import React, { useState } from 'react';
import { Playfair_Display, Montserrat, Baskervville } from 'next/font/google';
import PageHeader from '../Components/PageHeader';
import { FaComments, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const playfair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const baskervville = Baskervville({weight: '400', subsets: ['latin'] });

const Contact = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className={`md:pt-[calc(80px+55px)] pt-[80px] flex flex-col items-center bg-white py-8 px-4 md:px-12 lg:px-24 ${montserrat.className}`}>
      {/* Header Section */}
      <PageHeader header="Help & Contact" />
      {/* Contact Options Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-16">
        <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 border-r-2 border-gray-300 flex flex-col items-center">
          <div className="flex items-center justify-center w-32 h-32 mb-4 bg-primary rounded-full">
            <FaComments className="w-16 h-16 text-onPrimary" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-1">Chat with Us</h3>
            <p className="text-sm text-gray-600">Get instant support via our live chat</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 border-r-2 border-gray-200 flex flex-col items-center">
          <div className="flex items-center justify-center w-32 h-32 mb-4 bg-primary rounded-full">
            <FaPhoneAlt className="w-16 h-16 text-onPrimary" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-1">Call Us At</h3>
            <p className="text-sm text-gray-600">+1 (205) 123-4567</p>
            <p className="text-xs text-gray-500">Mon-Fri, 9AM-6PM</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 flex flex-col items-center">
          <div className="flex items-center justify-center w-32 h-32 mb-4 bg-primary rounded-full">
            <FaEnvelope className="w-16 h-16 text-onPrimary" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-1">Write to Us</h3>
            <p className="text-sm text-gray-600">contact@veliciae.com</p>
            <p className="text-xs text-gray-500">We'll respond within 24 hours</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full md:w-3/4 lg:w-2/3 mb-16">
        <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-center ${playfair.className}`}>Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="bg-gradient-to-r from-primary to-accent text-onPrimary p-4 cursor-pointer hover:bg-opacity-90 transition duration-300 flex justify-between items-center" 
             onClick={() => toggleFAQ(0)}
             >
              <span className="font-medium">Do I need to pay shipping / delivery charges?</span>
              <motion.span
                animate={{ rotate: isOpen[0] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ▼
              </motion.span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen[0] ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="p-4 text-gray-700">
                Shipping charges may apply depending on your order value and location. We offer free shipping on orders above a certain amount. Please check our shipping policy for more details.
              </p>
            </motion.div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="bg-gradient-to-r from-primary to-accent text-onPrimary p-4 cursor-pointer hover:bg-opacity-90 transition duration-300 flex justify-between items-center" onClick={() => toggleFAQ(1)}>
              <span className="font-medium">Can I send gifts to my loved ones?</span>
              <motion.span
                animate={{ rotate: isOpen[1] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ▼
              </motion.span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen[1] ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="p-4 text-gray-700">
                Yes, we offer gift-wrapping services and can send your purchases directly to your loved ones. You can add a personalized message during checkout.
              </p>
            </motion.div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="bg-gradient-to-r from-primary to-accent text-onPrimary p-4 cursor-pointer hover:bg-opacity-90 transition duration-300 flex justify-between items-center" onClick={() => toggleFAQ(2)}>
              <span className="font-medium">What happens if my order is lost in transit?</span>
              <motion.span
                animate={{ rotate: isOpen[2] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ▼
              </motion.span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen[2] ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="p-4 text-gray-700">
                We take full responsibility for packages lost in transit. Our customer service team will work with you to either resend your order or provide a full refund.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Inquiry Section */}
      <div className="w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inquiry Section */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${playfair.className} text-onPrimary`}>Have An Enquiry?</h2>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <FaClock className="text-onPrimary text-2xl mr-3" />
                <p className="font-medium text-lg text-onSurface">Business Hours</p>
              </div>
              <p className="ml-9 text-onSurface text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="ml-9 text-onSurface text-sm">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="ml-9 text-onSurface text-sm">Sunday: Closed</p>
              <div className="flex items-center mt-6 mb-4">
                <FaMapMarkerAlt className="text-onPrimary text-2xl mr-3" />
                <p className="font-medium text-lg text-onSurface">Address</p>
              </div>
              <p className="ml-9 text-onSurface text-sm">Veliciae Jewelry Pvt. Ltd.</p>
              <p className="ml-9 text-onSurface text-sm">123, 4th Street, New Market,</p>
              <p className="ml-9 text-onSurface text-sm">Kolkata, West Bengal, 700013, India</p>
            </motion.div>
            <div className="mt-8">
              <p className="font-medium mb-4 text-lg text-onSurface">Follow Us</p>
              <div className="flex space-x-6">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary text-2xl hover:text-primary transition duration-300"
                >
                  <FaFacebookF className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary text-2xl hover:text-primary transition duration-300"
                >
                  <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary text-2xl hover:text-primary transition duration-300"
                >
                  <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="w-full">
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${playfair.className} text-onPrimary`}>Get in Touch</h2>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 pl-10 rounded-md bg-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent transition duration-300 shadow-sm text-onSurface placeholder-gray-500"
                />
                <span className="absolute left-3 top-4 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-4 pl-10 rounded-md bg-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent transition duration-300 shadow-sm text-onSurface placeholder-gray-500"
                />
                <span className="absolute left-3 top-4 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your message"
                  className="w-full p-4 pl-10 rounded-md bg-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent transition duration-300 shadow-sm text-onSurface placeholder-gray-500"
                  rows="4"
                ></textarea>
                <span className="absolute left-3 top-4 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <button
                type="submit"
                className="w-full p-4 bg-onPrimary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300 text-lg flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full mt-16">
        <h2 className={`text-3xl font-semibold mb-6 text-center ${playfair.className}`}>Our Location</h2>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175269847!2d-73.98731668459473!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623158641489!5m2!1sen!2sus"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            style={{border: 1}}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
