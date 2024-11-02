'use client';
import React from 'react'
import {Baskervville} from 'next/font/google';
import ImageSwiper from './ImageSwiper';


const baskervville = Baskervville({
    weight: "400",
    subsets: ['latin']});


const ShopByCategorySection = () => {
  return (
    <div className=' max-w-7xl mx-auto'>
    <div className='lg:px-12 px-4 w-full  flex md:py-8 py-4 md:flex-row flex-col md:my-12 my-6 h-max items-center justify-center'>
      <div className={`${baskervville.className} md:w-[40%] w-full` }>
        <h1 className='md:text-5xl text-3xl mb-4 text-onPrimary'>Shop By Category</h1>
        <p className=''>Browse through your favorite categories.
            <br/>
            We've got them all!
        </p>
      </div>
      <div className='md:w-[60%] w-full flex flex-row mt-4' >
        <ImageSwiper />
      </div>
    </div>
    </div>
  )
}

export default ShopByCategorySection
