import { create } from 'zustand';
import axios from 'axios';
import { cartEndPoints } from '../shared/endPoints';
import toast from 'react-hot-toast';



export const useCartStore = create((set,get)=>({
    cartItems:[],
    cartTotal:0,
    isLoading:false,
    error:null,
    subTotal:0,
    /**
     * Adds a product to the cart.
     * 
     * @async
     * @function addToCart
     * @param {Object} product - The product to be added to the cart.
     * @throws {Error} If there's an issue with the API call or processing the response.
     * 
     * @description
     * This function performs the following steps:
     * 1. Sets the loading state to true.
     * 2. Sends a POST request to the cart endpoint with the product data.
     * 3. If the request is successful (status 200 or 201), updates the cart items in the store.
     * 4. Sets the loading state back to false.
     * 5. If an error occurs, it sets the loading state to false and stores the error message.
     * 
     * @example
     * // Assuming 'product' is an object with the necessary product details
     * addToCart(product);
     */
    addToCart: async (product) => {
        try {
            if(!product){
                throw new Error('Product not found')
            }
            set({ isLoading: true });
            const response = await axios.post(cartEndPoints, product);
            if (response.status === 200 || response.status === 201) {
                set({ isLoading: false });
                toast.success('Product added to cart');
            }
            
        } catch (error) {
            set({ isLoading: false, error: error.message });
            toast.error('Failed to add product to cart');
        }
    },

    getCartItems: async(email)=>{
        try{
            set({isLoading:true})
            const response = await axios.get(cartEndPoints,{params:{email}})
            if(response.status === 200){
                set({cartItems:[...response.data.cart]})
                get().totalCartPrice()
                get().calSubTotal()
               
            }
            set({isLoading:false})
        }catch(error){
            set({isLoading:false,error:error.message})
        }
    },

    totalCartPrice: ()=>{
        const total = get().cartItems.reduce((acc,item)=>acc + item.totalPrice,0)
        set({cartTotal:total})
    },

    deleteCartItem: async(id,email)=>{
        try{
            // set({isLoading:true})
            const response = await axios.delete(cartEndPoints,{params:{id,email}})
            if(response.status === 200){
                const updatedCart = get().cartItems.filter(item=>item._id !== id)
                set({cartItems:updatedCart})
                get().totalCartPrice()
                get().calSubTotal()
                toast.success('Product removed from cart')
            }
        }catch(error){
            toast.error('Failed to remove product from cart')
        }
    },

    manageCartQty: (type,index)=>{
            const updatedCart = get().cartItems.map((item,i)=>{
                if(i === index){
                    if(type === 'dec' && item.quantity > 1){
                        item.quantity -= 1;
                    }else if (type === 'inc'){
                        item.quantity += 1
                    }
                    item.totalPrice = item.quantity * item.product.sellingPrice
                    return item
                }
                return item
            })
            set((_)=>({cartItems:updatedCart}))
            get().totalCartPrice()
            get().calSubTotal()
        
        
    },

    calSubTotal:()=>{
        const subTotal = get().cartItems.reduce((acc,item)=>acc + (item.product.costPrice * item.quantity),0)
        set({subTotal:subTotal})
        return subTotal
    }
}))