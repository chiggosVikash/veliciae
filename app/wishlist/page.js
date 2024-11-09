"use client";
import React, { useEffect } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import WishlistProduct from "../assets/wishlist-product.png";
import Heart from "../assets/heart.png";
import PageHeader from "../Components/PageHeader";
import Image from "next/image";
import { Spinner } from "@material-tailwind/react";
import { useWishlistStore } from "../stores/wishlistStore";
import { useCartStore } from "../stores/cartStore";
import { useSession } from "next-auth/react";

const Wishlist = () => {
  // const [wishlistItems, setWishlistItems] = useState([]);

  const {addToCart} = useCartStore();


  const {
    wishlistItems,
    fetchWishlistItems,
    deleteWishlistItem,
    error,
    isLoading,
  } = useWishlistStore();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      fetchWishlistItems(session.user.email);
    }
  }, [status]);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spinner color="blue" size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-16 max-w-7xl max-h-max mx-auto mb-24"
    >
      <PageHeader header="In Your Wishlist" icon={Heart} />
      {wishlistItems.length === 0 ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-onSurface text-center text-lg">
            Your wishlist is empty. Start adding your dream jewelry!
          </p>
        </div>
      ) : (
        <div className="md:mt-12 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {wishlistItems.map((item) => {
            const productImage =
              item.product.productImages.length === 0
                ? WishlistProduct
                : item.product.productImages[0];
            return (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full py-2 md:px-0 px-2 relative flex items-center   rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="md:pl-4 w-1/3">
                  {/* <img src={WishlistProduct.src} alt={item.name} className="w-full lg:h-40 h-28 sm:h-44 object-cover" /> */}
                  <Image
                    src={productImage}
                    alt={item.product.productName}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => deleteWishlistItem(item._id, session.user.email)}
                      className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                </div>
                <div className="px-4 lg:py-0 py-2 md:w-[60%] ">
                  <h2 className="sm:text-lg  text-sm font-semibold  text-onPrimary mb-1">
                    {item.name}
                  </h2>
                  <h3 className="sm:text-sm text-xs text-gray-500 mb-1">
                  From {item.product.category} Category
                  </h3>
                  <p className="text-onPrimary text-lg lg:mb-4 ">
                    ₹{item.product.sellingPrice}
                  </p>
                  <div className=" flex justify-between items-center mt-1">
                    <button 
                    
                    onClick={() => {
                      const cartProduct = {
                        productId: item.product._id,
                        email: session?.user?.email ?? "NA",
                        price: item.product.sellingPrice,
                        quantity: item.quantity,
                        totalPrice: item.product.sellingPrice * item.quantity,
                      };
                      // console.log(cartProduct)
                      addToCart(cartProduct)
                      deleteWishlistItem(item._id, session.user.email);
                    }}
                    
                    className="whitespace-nowrap bg-accent  cursor-pointertext-onPrimary lg:px-4 px-2 py-2 lg:rounded-lg rounded-full hover:bg-opacity-90 transition duration-300 flex items-center">
                      <FaShoppingCart className="lg:mr-2 " />
                      <span className="lg:flex hidden">Add to Cart</span>
                    </button>
                    {/* <button className="whitespace-nowrap mx-4 bg-onPrimary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center">
                    <MdElectricBolt className="mr-2" />
                    Buy Now
                  </button> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default Wishlist;
