import { create } from 'zustand';
import axios from 'axios';
import { cartEndPoints } from '../shared/endPoints';

export const useCartStore = create((set)=>({
    cartItems:[],
    cartTotal:0,
    isLoading:false,
    error:null,
    addToCart: async(product)=>{
       try{
        set({isLoading:true})
        const response = await axios.post(cartEndPoints,product)
        if(response.status === 200 || response.status === 201){
            set({cartItems:response.data})
          
        }
        set({isLoading:false})
       }catch(error){
        set({isLoading:false,error:error.message})
       }
    },

    getCartItems: async(email)=>{
        try{
            set({isLoading:true})
            const response = await axios.get(`${cartEndPoints}?email=${email}`)
            if(response.status === 200){
                set({cartItems:response.data.cart})
            }
            set({isLoading:false})
        }catch(error){
            set({isLoading:false,error:error.message})
        }
    },

    totalCartPrice: ()=>{
        const total = cartItems.reduce((acc,item)=>acc + item.totalPrice,0)
        set({cartTotal:total})
    }
}))