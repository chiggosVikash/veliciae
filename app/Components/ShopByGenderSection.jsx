import React from 'react'
import {Baskervville ,Satisfy} from 'next/font/google';
import MenImage from '../assets/gender/men.png';
import WomenImage from '../assets/gender/women.png';
import Kids from '../assets/gender/kids.png';
import { useRouter } from 'next/navigation';

const baskervville = Baskervville({
    weight: "400",
    subsets: ['latin']
});
const satisfy = Satisfy({
    weight: "400",
    subsets: ['latin']
});


const ShopByGenderSection = () => {
    const router = useRouter();
    const genders = [
         {
            title:"Men",
            image:`${MenImage.src}`,
            path:"",
         },
         {
            title:"Kids",
            image:`${Kids.src}`,
            path:"",
         },
         {
            title:"Women",
            image:`${WomenImage.src}`,
            path:""
         }
    ];
  return (
    <div className='w-full h-max  lg:px-12 px-4 lg:py-12 py-4'>
      <div className={` ${baskervville.className} flex items-center justify-center mb-12`}>
        <div className='w-[25%] h-0.5 bg-blue-gray-300'></div>
        <h1 className='md:text-5xl text-3xl  md:mx-6 mx-3'>Shop By Gender</h1>
        <div className='w-[25%] h-0.5 bg-blue-gray-300'></div>
      </div>
      <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {
            genders.map((gender, index) => {
                return (
                    <div 
                        onClick={() => router.push('/browse-products')}
                        key={index} className='bg-primary hover:scale-105 transition duration-700 p-2  md:my-0  rounded-2xl shadow-lg relative hover:shadow-xl '>
                        <img src={gender.image} alt={gender.title} />
                        <div className={`${baskervville.className} flex justify-between mt-2 px-4`}>
                            <h3 className={`text-lg font-bold text-center`}>{gender.title}</h3>
                            <button>Explore Now</button>
                        </div>
                    </div>
                );
            })
        }
      </div>
      </div>
      
    </div>
  )
}

export default ShopByGenderSection
