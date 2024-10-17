import { create } from "zustand";
import axios from "axios";
import { userEndPoints } from "../shared/endPoints";
import toast from "react-hot-toast";
import { signOut } from 'next-auth/react';

export const useUserStore = create((set)=>({
    user:null,
    isLoading:false,
    error:null,
    setUser:(user)=>set({user}),
    saveUser: async(user)=>{
        try{
            set({isLoading:true})
            const userData = {
                name:user.name,
                email:user.email,
            }
            const res = await axios.post(userEndPoints,userData)
            if(res.status === 200 || res.status === 201){
                set({user:res.data.user})
            }
            set({isLoading:false})
        }catch(error){
            toast.error(error.response.data.message)
            set({isLoading:false,error:error.response.data.message})
        }
    },
    logout: async () => {
        try {
            await signOut({ callbackUrl: '/' });
            set({ user: null });
            toast.success('Logged out successfully');
        } catch (error) {
            console.error('Logout error:', error);
        }
    },
    setIsLoading: (isLoading)=>set({isLoading}),
    setError:(error)=>set({error})
}))
