'use client';
import { Carousel } from "@material-tailwind/react";
import React from 'react'

const CaraoselSlider = () => {
  return (
    <div className="max-w-full pt-[calc(80px+45px)]">
  <Carousel autoplay={true} loop={true} transition={{ duration: 1, }} 
   className="lg:h-[80vh] sm:h-[40vh] h-[25vh] ">
  <img
    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    alt="image 1"
    className="h-full w-full object-cover"
  />
  <img
    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    alt="image 2"
    className="h-full w-full object-cover"
  />
  <img
    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    alt="image 3"
    className="h-full w-full object-cover"
  />
</Carousel>
</div>
);

}

export default CaraoselSlider
