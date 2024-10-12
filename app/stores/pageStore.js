import { create } from "zustand";
import axios from "axios";
import { productsCountEndPoint } from "../shared/endPoints";




export const usePageStore = create((set) => ({
    page: 1,
    count: 0,
    pages:[],
    seedPages: () => {
        const totalPages = Math.ceil(count / 30);
        if(totalPages <= 10){
            set({pages: Array.from({length: totalPages}, (_, i) => i + 1)})
            return;
        }
        /// add 1 page after the current page
        if(page > 10 && page < totalPages){
            set({pages:[...pages, page + 1]})
            return;
        }

    },
    getTotalProductsCount: async (filters) => {
        try{
            const response = await axios.put(productsCountEndPoint, {"filters": filters});
            
            set({ count: response.data.count });
            return response.data.count
        }catch(e){
            console.log("error in getTotalProductsCount", e);
            return 0;
        }
    },
    setPage: (newPage) => set({ page: newPage }),
   
}));