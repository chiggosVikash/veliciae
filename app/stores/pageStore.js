import { create } from "zustand";
import axios from "axios";
import { productsCountEndPoint } from "../shared/endPoints";

export const usePageStore = create((set) => ({
    page: 1,
    count: 0,
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