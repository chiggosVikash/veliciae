'use client';
import React from 'react';
import { Baskervville,Pacifico,Satisfy } from 'next/font/google';
import ModernDesign from '../assets/latestproducts/modern-design.png';
import TrendingEarrings from '../assets/latestproducts/trending-earrings.png';
import Sparkling from '../assets/latestproducts/sparking.png';
import { useRouter } from 'next/navigation';

const baskervville = Baskervville({
    weight:"400",
    subsets:["latin"]
});
const satisfy = Satisfy({
  weight:"400",
  subsets:["latin"]
});

const LatestProductsSection = () => {
    const router = useRouter();
    const products = [
        {
            title:"Modern Designs",
            image:`${ModernDesign.src}`,
            path:"",
            translateY:'lg:translate-y-[30%] translate-y-0',
        },
        {
            title:"Trending Earrings",
            image:`${TrendingEarrings.src}`,
            translateY:'lg:translate-y-[10%] translate-y-0',
        },
        {
            title:"Sparkling Dew",
            image:`${Sparkling.src}`,
            translateY:'lg:-translate-y-[5%] translate-y-0',
        }


    ];
  return (
    <div className='bg-primary '>
    <div className=' relative w-full  lg:h-screen 2xl:h-[70vh] h-max max-w-7xl mx-auto lg:px-12 px-4 lg:py-12 py-4'>
      <div className={`${baskervville.className} w-full text-left` }>
        <h1 className='md:text-5xl text-3xl mb-4 text-onPrimary'>Our Latest Products</h1>
        <p className=''>Discover the Newest Sparkles, Freshly Arrived for You!
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-4'>
          {
            products.map((product, index) => {
                return (
                    <div  
                      onClick={() => router.push('/browse-products')}
                      key={index}
                      style={{backgroundImage:`url(${product.image})`}}
                      className={`${product.translateY} h-[17rem] hover:scale-105 transition duration-500 w-full bg-contain bg-center bg-no-repeat `}>
                      <div className={`h-[16rem] bg-opacity-75 flex flex-col justify-between  items-center p-4`}>
                        <h3 className={`${satisfy.className} text-2xl font-semibold ${index==0?'text-primary':'text-onPrimary'} mb-2`}>{product.title}</h3>
                        <button className='bg-onPrimary text-white px-6 py-2 rounded-lg'>Explore More</button>
                      </div>
                    </div>
                );
            })
          }
      </div>
      <button 
      onClick={() => router.push('/browse-products')}
      className='md:absolute md:mt-0 mt-4 hover:bg-onPrimary hover:text-primary bg-gray-50 text-onPrimary hover:translate-x-2 transition duration-500 py-3 px-12 rounded-md right-20 bottom-10'>
        Explore More
      </button>
    </div>
    </div>
  )
}

export default LatestProductsSection
