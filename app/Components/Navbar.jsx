'use client';
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../assets/velciae_logo.png";
import SearchField from "./SearchField";
import { FaShop } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import MenuBar from "./MenuBar";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { menuitems } from "../menuitems";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="fixed z-[100] w-full bg-primary">
      <div className="flex justify-between bg-primary  h-[80px] lg:px-12 px-4 items-center ">
        {/* Logo Image */}
        <img
          src={Logo.src}
          alt="Logo Image"
          style={{ width: "100px", height: "80px", objectFit: "contain" }}
        />
        {/* Search Field */}
        <div className="w-1/2 md:w-1/3">
          <SearchField />
        </div>
        {/* Menu Link */}
        <ul className="md:flex hidden flex-wrap space-x-8">
          <div className="flex flex-col items-center hover:border-b-2 border-onPrimary ">
            <FaShop className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary mb-2">
              <Link href="/browse-products">Shop</Link>
            </li>
          </div>
          <div className="flex flex-col items-center relative group">
            <IoPerson className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary cursor-pointer ">
              Account
            </li>
            <div className="absolute top-full left-0  w-52 bg-white rounded-lg shadow-xl hidden group-hover:block transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-1 opacity-0 group-hover:opacity-100">
              <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-lg font-bold text-onPrimary mb-1">MY ACCOUNT</h2>
                <p className="text-xs text-gray-600 mb-4">Login to access your account</p>
                <div className="flex space-x-3">
                  <Link href="/signin" className="text-xs text-onPrimary bg-primary hover:bg-accent transition-colors duration-300 rounded-md px-4 py-1 text-center font-semibold shadow-md hover:shadow-lg">Login</Link>
                  <Link href="/signup" className="text-xs text-onPrimary border border-primary  hover:border-accent transition-colors duration-300 rounded-md px-4 py-1 text-center font-semibold">Signup</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <FaRegHeart className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary">
              <Link href="/wishlist">Wishlist</Link>
            </li>
          </div>
          <div className="flex flex-col items-center">
            <IoCartOutline className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary">
              <Link href="/add-to-cart">Cart</Link>
            </li>
          </div>
        </ul>
        <div 
          onClick={handleMenu}
          className="md:hidden z-50 ml-4 text-2xl text-onPrimary">
            {showMenu? <FaTimes /> : <RiMenu3Line />}
        </div>

        {/* Mobile Menu */}
        <div className={ showMenu?'md:hidden absolute flex flex-col items-center h-screen bg-primary w-[50%] top-0 right-0':'hidden'}>
        <img
          src={Logo.src}
          alt="Logo Image"
          style={{ width: "100px", height: "80px", objectFit: "contain" }}
          className='my-4'
        />
          <div className=" h-[80px] w-full flex flex-col mx-5  text-center">
            <h1 className="uppercase text-2xl font-bold  text-center text-onPrimary">Veliciae</h1>
            <p  className=" text-sm text-center">The quest of luxury ends here.</p>
          </div>
          <div className='h-[1px] bg-gray-200 w-full'></div>
          
          <ul>
            {
              menuitems.map((item, index) => {
                return <li 
                      onClick={handleMenu}
                      key={index} className="text-xl py-3 mx-4"><Link href={item.path}>{item.title}</Link></li>;
              })
            }
          </ul>
          <ul>
          <li 
              onClick={handleMenu}
              className="text-xl py-3 mx-4"><Link href='/wishlist'>Wishlist</Link></li>
          </ul>
        </div>        

      </div>
      <MenuBar />
    </nav>
  );
};

export default Navbar;
