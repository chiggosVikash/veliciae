'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaEdit, FaShoppingBag, FaMapMarkerAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import PersonalInfo from '../Components/PersonalInfo';

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');

  useEffect(() => {
    // Fetch profile data from API or load from state management
    setProfile({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 9876543210',
      dob: '13/05/2004',
    });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  if (!profile) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  const menuItems = [
    { icon: FaUser, text: 'Personal Information', section: 'personal', component: PersonalInfo },
    { icon: FaShoppingBag, text: 'My Orders', section: 'orders', component: Orders },
    { icon: FaMapMarkerAlt, text: 'My Address', section: 'address', component: Address },
    { icon: FaHeart, text: 'Wishlist', section: 'wishlist', component: Wishlist },
    { icon: FaShoppingCart, text: 'My Cart', section: 'cart', component: Cart },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-onPrimary mb-8 text-center">My Account</h1>
      <div className="flex flex-col md:flex-row gap-8">
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
                  onClick={() => setActiveSection(item.section)}
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
            if (activeSection === item.section) {
              return <item.component 
              key={item.section} profile={profile} isEditing={isEditing} handleEdit={handleEdit} handleSave={handleSave} setIsEditing={setIsEditing} />;
            }
            return null;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

// const PersonalInfo = ({ profile, isEditing, handleEdit, handleSave, setIsEditing }) => (
//   <div>
//     <div className="flex justify-between items-center mb-6">
//       <div className="flex items-center">
//         <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-4xl text-onPrimary font-bold mr-4">
//           {profile.name.charAt(0)}
//         </div>
//         <h2 className="text-3xl font-semibold text-onSurface">{profile.name}</h2>
//       </div>
//       {!isEditing && (
//         <button
//           onClick={handleEdit}
//           className="bg-accent text-onPrimary px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300 flex items-center"
//         >
//           <FaEdit className="mr-2" /> Edit Profile
//         </button>
//       )}
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="flex items-center">
//         <FaEnvelope className="text-accent mr-3 text-xl" />
//         <div>
//           <p className="text-sm text-onSurfaceVariant">Email</p>
//           <p className="text-onSurface">{profile.email}</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <FaPhone className="text-accent mr-3 text-xl" />
//         <div>
//           <p className="text-sm text-onSurfaceVariant">Phone</p>
//           <p className="text-onSurface">{profile.phone}</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <FaCalendarAlt className="text-accent mr-3 text-xl" />
//         <div>
//           <p className="text-sm text-onSurfaceVariant">Date of Birth</p>
//           <p className="text-onSurface">{profile.dob}</p>
//         </div>
//       </div>
//     </div>
//     {isEditing && (
//       <div className="mt-8">
//         <button
//           onClick={handleSave}
//           className="bg-accent text-onPrimary px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 mr-4"
//         >
//           Save Changes
//         </button>
//         <button
//           onClick={() => setIsEditing(false)}
//           className="bg-surface text-onSurface px-6 py-2 rounded-full border border-accent hover:bg-accent hover:text-onPrimary transition duration-300"
//         >
//           Cancel
//         </button>
//       </div>
//     )}
//   </div>
// );

const Orders = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
    {/* Add order history component here */}
    <p>Your order history will be displayed here.</p>
  </div>
);

const Address = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">My Addresses</h2>
    {/* Add address management component here */}
    <p>Your saved addresses will be displayed here.</p>
  </div>
);

const Wishlist = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
    {/* Add wishlist component here */}
    <p>Your wishlist items will be displayed here.</p>
  </div>
);

const Cart = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
    {/* Add cart component here */}
    <p>Your cart items will be displayed here.</p>
  </div>
);

export default MyProfile;
