import React, { useState } from "react";
import { menuitems } from "../menuitems";
import Link from "next/link";

const MenuBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  return (
    <div className=" md:flex hidden lg:px-12 px-8 bg-white w-full  ">
      <ul className="flex items-center ">
        {menuitems.map((item, index) => {
          return <li 
                    onClick={() => setSelectedMenu(item.title)}
                    key={index} 
                    className="relative px-4 text-[.9rem] font-semibold text-onPrimary text-center py-3">
                  <Link 
                    href={item.path} 
                    className={selectedMenu===item.title?"text-secondary border-b-2 border-secondary mx-4 text-lg ":"after:absolute after:content-[''] after:block after:w-6  after:hover:w-[80%] transition-all duration-700  after:h-[1.5px] after:bg-accent  after:hover:bg-secondary after:hover:left-3 "}>
                    {item.title}</Link></li>;
        })}
      </ul>
    </div>
  );
};

export default MenuBar;
