'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import {Swiper , SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.min.css';
import Image1 from '../../assets/productimage1.png';
import Image2 from '../../assets/productimage2.png';
import Image3 from '../../assets/productimage3.png';
import { FaPlus ,FaMinus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import Loader from '../../Components/Loader';
import ProductDetailsSection from '../../Components/ProductDetailsSection';
import PriceBreakupSection from '../../Components/PriceBreakupSection';
import { useProductStore } from '../../stores/productsStore';

const ProductDetailsPage = () => {
    const { product, isLoading, errorMessage, getProduct } = useProductStore();
    const { productId } = useParams();


    useEffect(() => {
        getProduct(productId);
    }, [productId, getProduct]);


    

    if(isLoading){
        return <div className="flex justify-center items-center h-[50vh]"><Loader/></div>
    }

    if(errorMessage){
        return <div className="flex justify-center items-center h-[50vh]"><h1>{errorMessage}</h1></div>
    }
    if(!product){
        return <div className="flex justify-center items-center h-[50vh]"><h1>Product not found</h1></div>
    }

    const smallimages = product.productImages;
  return (
    <div className='md:pt-[calc(80px+55px)] pt-[80px] lg:px-12 px-4'>
      {/* Heading */}
       <div className='flex flex-col sm:flex-row items-center justify-between my-4'>
          <div className='text-xs sm:text-sm mb-2 sm:mb-0'>
             <span className='mr-2'>Home |</span>
             <span className='mr-2'>Products |</span>
             <span className='mr-2'>Curved Triangle Diamond Ring</span>
          </div>
          <div className='w-full sm:w-[70%] h-0.5 bg-accent'></div>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Product Image */}
          <div className='flex flex-col justify-between w-full h-max'>
              <Swiper 
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                direction='horizontal'
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1380: {
                            slidesPerView: 5,
                        }
                    }
                    }
                 className='w-full py-2 sm:py-4 px-2 sm:px-4 rounded-md bg-white relative'>
                  {smallimages.map((image, index) => {
                    return <SwiperSlide 
                           key={index}
                           className='m-2 sm:m-4'
                           >
                        <img src={image} alt='product image' className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover'/>
                    </SwiperSlide>
                 })}
                 <div className="swiper-button-prev !w-6 !h-6 !text-onSurface !bg-accent after:!text-xs"></div>
                 <div className="swiper-button-next !w-6 !h-6 !text-onSurface !bg-accent after:!text-xs"></div>
              </Swiper>
              <div className='mt-4 sm:mt-0 ml-4 md:h-[50vh] lg:h-[70vh] 2xl:h-[50vh] h-[40vh]'>
                  <img src={product.productImages[0]} alt='product image' className='w-full  h-full object-cover'/>
              </div>
          </div>
          {/* Product Basic Details */}
          <div className='w-full h-max py-4 rounded-md px-4 sm:px-6 '>
             <p className='text-xs sm:text-sm text-gray-500 mb-1'>SKU ID: {product.sku}</p>
             <h1 className='text-2xl sm:text-3xl text-onPrimary font-semibold w-full sm:w-[80%]'>
                {product.productName}
             </h1>
             <p className='text-xs sm:text-sm text-gray-600 my-2'>From {product.collection ?? product.category}</p>
             <div className='h-0.5 w-full bg-accent my-4'></div>
             <p className='text-xs sm:text-sm w-full sm:w-[90%] mb-4'>{product.description}</p>
             <h1 >
                <span className='text-xl sm:text-2xl text-onPrimary font-semibold mr-4'>₹{product.sellingPrice}</span>
                <span className='text-base sm:text-lg text-gray-500 line-through'> ₹{product.costPrice}</span>
             </h1>
             <p className='text-xs text-gray-500 my-2'>See full<span className='text-onPrimary'> Price Breakup.</span></p>
             
             {/* Size,Gross weight and Quantity Button section */}
            <div className='flex flex-wrap items-center my-4'>
                <div className='flex flex-col mb-2 mr-2 sm:mb-0'>
                    <h1 className='text-xs mb-1 mx-2 '>Size</h1>
                    <h2 className='border-[1px] border-gray-300 rounded-md py-2 px-4 w-28 text-xs sm:text-sm'>{product.size} mm</h2>
                </div>
                <div className='flex flex-col ml-0 sm:ml-4 mb-2 sm:mb-0'>
                    <h1 className='text-xs mb-1 mx-2 '>Gross weight</h1>
                    <h2 className='border-[1px] border-gray-300 rounded-md py-2 px-4  w-28 text-xs sm:text-sm'>1.65 g</h2>
                </div>
                <div className='flex flex-col ml-0 sm:ml-4'>
                    <h1 className='text-xs mb-1 mx-2 '>Quantity</h1>
                    <div className='flex items-center border-[1px] border-accent rounded-md  text-center text-xs sm:text-sm'>
                        <FaPlus className='mx-3 text-onPrimary cursor-pointer'/>
                        <h2 className='py-2 px-2 border-r border-l border-accent'>1 N</h2>
                        <FaMinus className='mx-3 text-onPrimary cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row text-xs sm:text-sm'>
                <p className='mb-2 sm:mb-0 sm:mr-8'>Gold Purity : 18 K</p>
                <p>Diamond weight : 0.73c</p>
            </div>
            <div className='flex flex-col sm:flex-row items-center my-4'>
                <button className='bg-accent py-2 px-4 w-full sm:w-[40%] hover:scale-105 duration-500 transition rounded-md mb-2 sm:mb-0 sm:mr-12'> <FaCartShopping className='inline mr-3'/>Add to Cart</button>
                <button className='bg-onPrimary text-white py-2 px-6 w-full sm:w-[40%] hover:scale-105 duration-500 transition rounded-md'><MdElectricBolt className='inline mr-3'/>Buy Now</button>
            </div>
          </div> 
       </div>
    {/* Product Details Section */}
    <ProductDetailsSection/>
    {/* Price Breakup Section */}
    <PriceBreakupSection/>
    </div>
  )
}

export default ProductDetailsPage
