'use client';
import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import 'swiper/swiper-bundle.min.css';
import Image1 from '../assets/productimage1.png';
import Image2 from '../assets/productimage2.png';
import Image3 from '../assets/productimage3.png';

const ProductDetailsPage = () => {
   const smallimages = [Image1, Image2, Image3];
  return (
    <div className='md:pt-[calc(80px+55px)] pt-[80px] lg:px-12 px-4'>
      {/* Heading */}
       <div className='flex items-center justify-between my-4'>
          <div className='text-sm '>
             <span className='mr-2'>Home |</span>
             <span className='mr-2'>Products |</span>
             <span className='mr-2'>Curved Triangle Diamond Ring</span>
          </div>
          <div className='w-[70%] h-0.5 bg-accent'></div>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Product Image */}
          <div className='flex w-full h-[70vh]'>
              <Swiper 
                spaceBetween={10}
                slidesPerView={3}
                direction='vertical'
                className='w-[25%] h-full my-4 mx-4 bg-white'>
                  {smallimages.map((image,) => {
                    return <SwiperSlide >
                        <img src={image.src} alt='product image' className='bg-white w-[100px] h-[100px] object-cover'/>
                    </SwiperSlide>
                 })}
              </Swiper>
              <div>
                  <img src={Image1.src} alt='product image' className=' w-full h-full'/>
              </div>
          </div>
          {/* Product Details */}
          <div></div>
       </div>
    </div>
  )
}

export default ProductDetailsPage
