import { create } from "zustand";
import axios from "axios";
import { addressEndPoints } from "../shared/endPoints";
import toast from "react-hot-toast";

export const useAddressStore = create((set,get) => ({
    addresses:[],
    defaultAddress:null,
    isProcessing:false,
    errorMsg:null,
    isProcessed:false,

    clearAddress: () => set({addresses:null}),
    addAddress: (address) => set((state) => ({addresses:[...state.addresses, address]})),
    getAddresses: async(email)=>{
        try{
            set({isProcessing:true});
            const response = await axios.get(addressEndPoints, {params:{email}});
            if(response.status === 200 && !response.data){
                set({addresses:[],isProcessing:false,isProcessed:true});
                return;
            }
            set({addresses:response.data,isProcessing:false,isProcessed:true});
        }catch(e){
            console.log(e);
            set({errorMsg:e.message})
            toast.error("Failed to fetch addresses");
        }
    },
    saveAddress: async(data,email)=>{
        try{
            if(!email){
                throw new Error("Email not found")
            }
            set({isProcessing:true});
            data.userId = email;
            if(get().addresses.length === 0){
                data.isDefault = true;
            }
            const response = await axios.post(addressEndPoints, {address: data});
            if(response.status === 200){
                set((state) => ({addresses:[...state.addresses,data]}));
                set({isProcessing:false,isProcessed:true});
                toast.success("Address saved successfully");
                return;
            }
        }catch(e){
            set({errorMsg:e.message,isProcessing:false})
            toast.error("Failed to save address");
        }
    },

    deleteAddress: async (addressId)=>{
        try{
            const response = await axios.delete(addressEndPoints, {params:{addressId}});
            if(response.status === 200){
                const updatedAddresses = get().addresses.filter((address) => address._id !== addressId);
                set({addresses:updatedAddresses,isProcessing:false,isProcessed:true});
                toast.success("Address deleted successfully");
                return;
            }
        }catch(e){
            set({errorMsg:e.message})
            toast.error("Failed to delete address", {duration: 3000});
        }
    },

    setDefaultAddress: async (email,addressId)=>{
        try{
            const response = await axios.patch(addressEndPoints, {email, addressId});
            if(response.status === 200){
                const updatedAddresses = get().addresses.map((address) => {
                    if(address._id === addressId){
                        address.isDefault = true;
                    }else{
                        address.isDefault = false;
                    }
                    return address;
                });
                set({addresses:updatedAddresses,isProcessing:false,isProcessed:true});
                toast.success("Default address set successfully");
                return;
            }
        }catch(e){
            set({errorMsg:e.message})
            toast.error("Failed to set default address", {duration: 3000});
        }
    }
}))