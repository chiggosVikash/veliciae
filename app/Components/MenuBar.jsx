import React from "react";
import { menuitems } from "../menuitems";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className="lg:px-12 px-8 bg-white w-full  ">
      <ul className="flex  relative">
        {menuitems.map((item, index) => {
          return <li key={index} className="relative px-4 text-[.9rem] font-semibold text-onPrimary text-center py-3">
            <Link 
                href="/" 
                className="after:absolute after:content-[''] after:block after:w-6  after:hover:w-full transition-all duration-700  after:h-[1.5px] after:bg-accent  after:hover:bg-secondary after:hover:left-3 ">{item.title}</Link></li>;
        })}
      </ul>
    </div>
  );
};

export default MenuBar;
