import { create } from 'zustand';
import axios from 'axios';
import { wishlistEndPoints } from '../shared/endPoints';
import toast from 'react-hot-toast';



export const useWishlistStore = create((set,get)=>({
    wishlistItems:[],
    isLoading:false,
    error:null,
    // subTotal:0,
   
    
    addToWishlist: async (product) => {
        try {
            if(!product){
                throw new Error('Product not found')
            }
            set({ isLoading: true });
            const response = await axios.post(wishlistEndPoints, product);
            if (response.status === 200 || response.status === 201) {
                set({ isLoading: false });
                toast.success('Product added to Wishlist');
            }
            
        } catch (error) {
            set({ isLoading: false, error: error.message });
            toast.error('Failed to add product to Wishlist');
        }
    },

    fetchWishlistItems: async(email)=>{
        try{
            set({isLoading:true})
            const response = await axios.get(wishlistEndPoints,{params:{email}})
            if(response.status === 200){
                set({wishlistItems:[...response.data.wishlist]})
                // get().totalCartPrice()
                // get().calSubTotal()
               
            }
            set({isLoading:false})
        }catch(error){
            set({isLoading:false,error:error.message})
        }
    },

    // totalCartPrice: ()=>{
    //     const total = get().cartItems.reduce((acc,item)=>acc + item.totalPrice,0)
    //     set({cartTotal:total})
    // },

    deleteWishlistItem: async(id,email)=>{
        try{
            // set({isLoading:true})
            const response = await axios.delete(wishlistEndPoints,{params:{id,email}})
            if(response.status === 200){
                const updatedWishlist = get().wishlistItems.filter(item=>item._id !== id)
                set({wishlistItems:updatedWishlist})
                // get().totalCartPrice()
                // get().calSubTotal()
                toast.success('Product removed from Wishlist')
            }
        }catch(error){
            console.log(error)
            toast.error('Failed to remove product from wishlist')
        }
    },

    modifyWishlistQuantity: (type,index)=>{
            const modifiedWishlistItemds = get().wishlistItems.map((item,i)=>{
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
            set((_)=>({wishlistItems:modifiedWishlistItemds}))
            // get().totalCartPrice()
            // get().calSubTotal()
        
        
    },

    // calSubTotal:()=>{
    //     const subTotal = get().cartItems.reduce((acc,item)=>acc + (item.product.costPrice * item.quantity),0)
    //     set({subTotal:subTotal})
    //     return subTotal
    // }
}))