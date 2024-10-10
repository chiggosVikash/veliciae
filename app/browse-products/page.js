"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FilterMenuBar from "../Components/FilterMenuBar";
import { FaTimes } from "react-icons/fa";
import ProductImage1 from "../assets/productimage1.png";
import ProductImage2 from "../assets/productimage2.png";
import ProductImage3 from "../assets/productimage3.png";
import { Baskervville } from "next/font/google";
import { FaFilter } from "react-icons/fa6";
import SortingMenu from "../Components/SortingMenu";
import { useRouter } from "next/navigation";
import { useProducts } from "../contexts/BrowseProductsContext";

const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
});

const BrowseProductsPage = () => {
  const router = useRouter();
  const {products,} = useProducts();

  const productsData = [
    {
      name: "Gold Necklace",
      offerPrice: "₹10,000",
      originalPrice: "₹15,000",
      discount: "33%",
      image: `${ProductImage1.src}`,
    },
    {
      name: "Diamond Ring",
      offerPrice: "₹20,000",
      originalPrice: "₹25,000",
      discount: "20%",
      image: `${ProductImage2.src}`,
    },
    {
      name: "Silver Bracelet",
      offerPrice: "₹5,000",
      originalPrice: "₹7,000",
      discount: "28%",
      image: `${ProductImage3.src}`,
    },
    {
      name: "Platinum Earrings",
      offerPrice: "₹15,000",
      originalPrice: "₹20,000",
      discount: "25%",
      image: `${ProductImage3.src}`,
    },
    {
      name: "Pearl Anklets",
      offerPrice: "₹7,000",
      originalPrice: "₹10,000",
      discount: "30%",
      image: `${ProductImage2.src}`,
    },
    {
      name: "Gemstone Bangles",
      offerPrice: "₹12,000",
      originalPrice: "₹18,000",
      discount: "33%",
      image: `${ProductImage1.src}`,
    },
  ];

  const [screenWidth, setScreenWidth] = useState(721);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const handleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterOpenLogic = () => {
    console.log(isSortingOpen);
    setScreenWidth(window.innerWidth);
    if (screenWidth >= 720) {
      setIsFilterOpen(true);
      setIsSortingOpen(true);
    } else {
      setIsFilterOpen(false);
      setIsSortingOpen(false);
    }
  };

  useEffect(() => {
    handleFilterOpenLogic();
    const handleResize = () => {
      handleFilterOpenLogic();
    };

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  if(browseProductsState.products.length === 0){}
 

  return (
    <main className="md:pt-[calc(80px+55px)] pt-[80px] lg:px-12 px-4">
      <div className="flex items-center py-2">
        <h1 className="text-xs">Home</h1>
        <MdKeyboardDoubleArrowRight className="text-xs mx-2" />
        <h1 className="text-xs">Product</h1>
      </div>
       <div className="flex md:hidden" >
          <div 
            className="mr-4"
            onClick={handleFilterOpen}>
            {isFilterOpen ?
            <button className="px-4 py-1 bg-primary rounded-md">Filter <FaTimes className="inline text-onPrimary"/></button>  
            : <button className="px-4 py-1 bg-primary rounded-md">Filter <FaFilter className="inline text-onPrimary"/></button>}
          </div>
          <SortingMenu/>

       </div>
      
      <div className="flex py-4 ">
        {isFilterOpen ? <FilterMenuBar /> : null}

        <div className="relative md:w-[70%] w-full h-max md:mx-10 ">
          {isSortingOpen?<div className="mb-8 flex items-center justify-end">
            {/* <div className=" bg-black">hlo</div> */}
            <SortingMenu />
          </div>:null}
          <div className="grid grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5 md:gap-8  gap-2">
            {productsData.map((product, index) => {
              return (
                <div
                  onClick={() => {
                      router.push('/browse-products/1');
                  }}
                  key={index}
                  className="border border-gray-300 p-2 rounded-xl group cursor-pointer hover:bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:h-[250px] sm:h-[150px] h-[100px] group-hover:scale-105 mb-2 transition duration-500"
                  />
                  <h1 className={` ${baskervville.className} font-semibold`}>
                    {product.name}
                  </h1>
                  <div>
                    <span className="sm:text-xl text-sm text-onPrimary font-semibold mr-3">{product.offerPrice}</span>
                    <span className="line-through sm:text-sm text-xs text-gray-500">{product.originalPrice}</span>
                  </div>
                  <h2 className="py-0.5 my-1 text-xs px-2 bg-accent text-center w-max rounded-md">
                    {product.discount} Off</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <h1 className='text-3xl font-semibold text-center mt-8'>Browse Products</h1> */}
    </main>
  );
};

export default BrowseProductsPage;
