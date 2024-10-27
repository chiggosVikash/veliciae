import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchField = () => {
  return (
    <div className="w-full bg-white flex items-center  rounded-lg justify-between focus:border-2  shadow-md focus:ring-accent focus:border-accent">
        <input 
            type="text" 
            className="w-full  h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none" 
            placeholder="Search for products..." />
        <IoSearch className="inline mr-4 text-xl text-onPrimary"/>
    </div>
  )
}

export default SearchField
