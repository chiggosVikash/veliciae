"use client";
import React from "react";
import Logo from "../assets/velciae_logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" overflow-x-hidden w-full md:h-[42vh] h-max bg-gray-900 pl-12 pr-12 mt-12 py-8 text-gray-300 ">
      <div className="grid md:grid-cols-3  grid-cols-1 gap-8">
        <div className="mb-8 ">
          <div className="flex items-center justify-start">
            <img
              src={Logo.src}
              alt="Logo Image"
              className="h-28 w-32 rounded-full mr-4"
            />
            <h1 className="text-2xl font-semibold uppercase">Veliciae</h1>
          </div>
          <p className="mt-2">The Quest For Luxury Ends Here!</p>
          <p className="mt-4">© 2024 Veliciae | All Rights Reserved</p>

          <a target="_blank" href="https://ygsd.in">
            <p className="mt-4">Developed By: Vikash Kumar</p>
          </a>
        </div>
        {/* Quick Links Section */}
        <div className="flex flex-col justify-start md:items-center items-start mb-8">
          <h1 className="text-xl text-primary">Quick Links</h1>
          <ul className="flex md:flex-col flex-wrap">
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Cart</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Products</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Contact Us</Link>
            </li>

            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-left mb-8">
          <h1 className="text-xl text-primary">Contacts</h1>
          <div className="mt-2">
            <p className="mx-2 py-1  ">Phone: +91 8336019288</p>
            <p className="mx-2 py-1">Email: info@veliciae.in </p>
            <p className="mx-2 py-1">
              Address: Veliciae Jewelry Pvt. Ltd. 123, 4th Street, New Market,
              Kolkata, West Bengal, 700013, India
              {/* <br />
                Hotel DRS Deluxe
                <br />
                Main Road, Purani Bazar
                <br />
                Lakhisarai-Bihar 811311 (India) */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
