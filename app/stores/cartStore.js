import { create } from 'zustand';
import axios from 'axios';
import { cartEndPoints } from '../shared/endPoints';



export const useCartStore = create((set)=>({
    cartItems:[],
    cartTotal:0,
    isLoading:false,
    error:null,
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
            set({ isLoading: true });
            const response = await axios.post(cartEndPoints, product);
            if (response.status === 200 || response.status === 201) {
                console.log(response.data.cart)
                set({ isLoading: false });
            }
            
        } catch (error) {
            set({ isLoading: false, error: error.message });
        }
    },

    getCartItems: async(email)=>{
        try{
            set({isLoading:true})
            const response = await axios.get(`${cartEndPoints}?email=${email}`)
            console.log(response.data.cart)
            if(response.status === 200){
                set({cartItems:[...response.data.cart]})
            }
            set({isLoading:false})
        }catch(error){
            set({isLoading:false,error:error.message})
        }
    },

    totalCartPrice: ()=>{
        const total = cartItems.reduce((acc,item)=>acc + item.totalPrice,0)
        set({cartTotal:total})
    },

    deleteCartItem: async(id,email)=>{
        try{
            set({isLoading:true})
            const response = await axios.delete(`${cartEndPoints}?id=${id}&email=${email}`)
            if(response.status === 200){
                const updatedCart = cartItems.filter(item=>item._id !== id)
                set({cartItems:updatedCart})
                set({isLoading:false})
            }
        }catch(error){
            set({isLoading:false,error:error.message})
        }
    }
}))