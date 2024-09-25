import React from "react";
import Link from "next/link";
import Logo from "../assets/velciae_logo.png";
import SearchField from "./SearchField";
import { FaShop } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import MenuBar from "./MenuBar";
import {
  FaSearch,
  FaCamera,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full bg-primary">
      <nav className="flex justify-between bg-primary  h-[80px] lg:px-12 px-4 items-center ">
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
      </nav>
      <MenuBar />
    </div>
  );
};

export default Navbar;
