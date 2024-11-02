'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaShoppingBag, FaMapMarkerAlt, FaHeart, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import PageHeader from '../Components/PageHeader';
import PersonalInfo from '../Components/PersonalInfo';
import AddAddress from '../Components/AddAddress';
import { useUserStore } from '../stores/userStore';
import { Toaster } from 'react-hot-toast';
import MyOrder from '../Components/MyOrder';
import {useRouter} from 'next/navigation';

const MyProfile = () => {
  const router = useRouter();

  const [activeSection, setActiveSection] = useState('personal');
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const { logout } = useUserStore();

 

 

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = async () => {
    await logout();
    setShowLogoutConfirmation(false);
  };

  const menuItems = [
    { icon: FaUser, text: 'Personal Information', section: 'personal', component: PersonalInfo },
    { icon: FaShoppingBag, text: 'My Orders', section: 'orders', component: MyOrder },
    { icon: FaMapMarkerAlt, text: 'My Address', section: 'address', component: AddAddress},
    { icon: FaHeart, text: 'Wishlist', section: 'wishlist', },
    { icon: FaShoppingCart, text: 'My Cart', section: 'cart',  },
    { icon: FaSignOutAlt, text: 'Logout', section: 'logout', onClick: handleLogout },
  ];

  const handleMenuItemClick = (item) => {
    if (item.section === 'wishlist') {
      router.push('/wishlist');
    } else if (item.section === 'cart') {
      router.push('/add-to-cart');
    }
    else if(item.onClick){
      item.onClick();
    } 
    else {
      setActiveSection(item.section);
    }
  };


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <PageHeader header="My Account" />
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        {/* Left Section - Menu */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:w-1/4 bg-surface p-6 rounded-lg shadow-xl"
        >
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuItemClick(item)}
                  className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                    activeSection === item.section ? 'bg-accent text-onPrimary' : 'hover:bg-accent hover:bg-opacity-10'
                  }`}
                >
                  <item.icon className="mr-3" />
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:w-3/4 bg-surface rounded-lg shadow-xl"
        >
          {menuItems.map((item) => {
            if (activeSection === item.section && item.component) {
              return <item.component key={item.section} />;
            }
            return null;
          })}
        </motion.div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setShowLogoutConfirmation(false)}
                className="cursor-pointer px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster />
    </motion.div>
  );
};

export default MyProfile;
