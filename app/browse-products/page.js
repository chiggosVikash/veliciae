"use client";
import React, { useState, useEffect, useCallback } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FilterMenuBar from "../Components/FilterMenuBar";
import { FaTimes, FaFilter } from "react-icons/fa";
import { Baskervville } from "next/font/google";
import SortingMenu from "../Components/SortingMenu";
import { useRouter } from "next/navigation";
import useProductsStore from "../stores/productsStore";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import { usePageStore } from "../stores/pageStore";
const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
});

const BrowseProductsPage = () => {
  let limit = 30;
  const router = useRouter();
  const { products, isLoading, errorMessage, getProducts } = useProductsStore();
  const { page } = usePageStore();
  const [_, setScreenWidth] = useState(721);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  



  const fetchProducts = useCallback(async (pageNum) => {
    const args = {
      filters: [],
      reqCount: (pageNum - 1),
      limit: limit
    };
    await getProducts(args);
   
  }, [getProducts]);

  useEffect(() => {
    fetchProducts(page);
  }, [page, fetchProducts]);

  /**
   * Effect hook to handle responsive filter and sorting menu visibility
   * 
   * This effect does the following:
   * 1. Defines a function to handle the logic for opening/closing filter and sorting menus
   * 2. Sets the screen width in the component's state
   * 3. Opens both filter and sorting menus for screen widths >= 720px
   * 4. Closes both menus for screen widths < 720px
   * 5. Calls this function immediately to set initial state
   * 6. Adds a resize event listener to update state when window is resized
   * 7. Cleans up the event listener on component unmount
   * 
   * @effect
   * @listens window:resize
   */
  useEffect(() => {
    /**
     * Handles the logic for opening/closing filter and sorting menus based on screen width
     */
    const handleFilterOpenLogic = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 720) {
        setIsFilterOpen(true);
        setIsSortingOpen(true);
      } else {
        setIsFilterOpen(false);
        setIsSortingOpen(false);
      }
    };

    // Set initial state
    handleFilterOpenLogic();

    // Add resize event listener
    window.addEventListener("resize", handleFilterOpenLogic);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleFilterOpenLogic);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  if(isLoading){
    console.log("isLoading", isLoading);
    return (<div className="flex justify-center items-center h-[50vh]"> Fetching products...</div>)
  }

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

          {/* products view */}
          <div className="grid grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5 md:gap-8  gap-2">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            ) : errorMessage ? (
              <div className="flex justify-center items-center h-full">
                <h1 className="text-2xl font-semibold">{errorMessage}</h1>
              </div>
            ) : products.length === 0 && isLoading == false ? (
              <div className="col-span-full flex justify-center items-center h-[50vh]">
                <h1 className="text-2xl font-semibold">No products found</h1>
              </div>
            ) : (
              products.map((product, index) => {
             
                  return (
                    <div 
                      onClick={() => router.push(`/browse-products/${product.productId}`)}
                    key={index}>
                      <img
                        src={product.productImages[0]}
                        alt={product.productName}
                        className="w-full md:h-[250px] sm:h-[150px] h-[100px] group-hover:scale-105 mb-2 transition duration-500"
                      />
                      <h1 className={` ${baskervville.className} font-semibold`}>
                        {product.productName}
                      </h1>
                      <div>
                        <span className="sm:text-xl text-sm text-onPrimary font-semibold mr-3">{product.sellingPrice}</span>
                        <span className="line-through sm:text-sm text-xs text-gray-500">{product.costPrice}</span>
                      </div>
                      <h2 className="py-0.5 my-1 text-xs px-2 bg-accent text-center w-max rounded-md">
                        {product.discount} Off</h2>
                    </div>
                  );
                
              })
            )}
          </div>
          {isLoading && page > 0 && (
            <div className="flex justify-center items-center mt-4">
              <Loader />
            </div>
          )}
        </div>
      </div>

      {/* <h1 className='text-3xl font-semibold text-center mt-8'>Browse Products</h1> */}

      <Pagination/>
    </main>
  );
};

export default BrowseProductsPage;
