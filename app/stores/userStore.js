import { create } from "zustand";
import axios from "axios";
import { userEndPoints } from "../shared/endPoints";
import toast from "react-hot-toast";
import { signOut } from 'next-auth/react';
import {useSession} from 'next-auth/react'

export const useUserStore = create((set)=>({
    user:null,
    isLoading:false,
    error:null,
    setUser:(user)=>set({user}),
    saveUser: async()=>{
        console.log("Save Users call received")
        const {data:session,status} = useSession()
        if(status !== "authenticated"){
            toast.error("User not authenticated")
            return;
        }
        const user = session.user;
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
    setError:(error)=>set({error}),

    getUser:async (email,name)=>{
        try{
            set({isLoading:true})
            const res = await axios.get(userEndPoints,{params:{email,name},
            })
            if(res.status === 200){
                set({user:res.data,isLoading:false})
                return res.data
            }
            set({isLoading:false})
        }catch(e){
            set({error:e.message,isLoading:false})
        }
    },

    updateUser: async(user)=>{
        try{
            set({isLoading:true})
            const name = user.firstName + " " + user.lastName;
            user.name = name;
            delete user.firstName;
            delete user.lastName;
            const res = await axios.put(userEndPoints,user)
            if(res.status === 200){
                set({user:user})
                toast.success("User updated successfully")
            }
            set({isLoading:false})
            return user;
        }catch(e){
            set({error:e.message,isLoading:false})
            toast.error(e.message)
        }
}
}))
