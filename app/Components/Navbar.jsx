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
        <div className=" ">
          <SearchField />
        </div>
        {/* Menu Link */}
        <ul className="md:flex hidden flex-wrap space-x-8">
          <div className="flex flex-col items-center hover:border-b-2 border-onPrimary ">
            <FaShop className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary mb-2">
              <Link href="/">Shop</Link>
            </li>
          </div>
          <div className="flex flex-col items-center">
            <IoPerson className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary">
              <Link href="/">Account</Link>
            </li>
          </div>
          <div className="flex flex-col items-center">
            <FaRegHeart className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary">
              <Link href="/">Wishlist</Link>
            </li>
          </div>
          <div className="flex flex-col items-center">
            <IoCartOutline className="text-sm mb-1 text-onPrimary" />
            <li className="uppercase text-sm text-onPrimary">
              <Link href="/">Cart</Link>
            </li>
          </div>
        </ul>
        <div 
           onClick={handleMenu}
           className="md:hidden z-50 ml-4 text-2xl text-onPrimary">
            {showMenu? <FaTimes /> : <RiMenu3Line />}
        </div>

        {/* Mobile Menu */}
        <div className={ showMenu?'md:hidden absolute flex flex-col h-screen bg-primary w-[50%] top-0 right-0':'hidden'}>
          <div className=" h-[80px] w-full flex flex-col  mx-5 justify-center">
            <h1 className="uppercase">Veliciae</h1>
            <p  className=" w-[70%] text-xs">The quest of luxury ends here.</p>
          </div>
          <ul>
            {
              menuitems.map((item, index) => {
                return <li key={index} className="text-lg py-2 mx-4"><Link href={item.path}>{item.title}</Link></li>;
              })
            }
          </ul>
        </div>        

      </div>
      <MenuBar />
    </nav>
  );
};

export default Navbar;
