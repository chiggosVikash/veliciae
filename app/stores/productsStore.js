import axios from "axios";
import { create } from "zustand";
import { browseEndPoint } from "../shared/endPoints";

const useProductsStore = create((set) => ({
    products: [],
    errorMessage: "",
    isLoading: false,

    getProducts: async (args) => {
        set({ isLoading: true, errorMessage: "" });
        try {
            const response = await axios.post(browseEndPoint, args);
            set({ products: response.data.products, isLoading: false });
            return response.data.products;
        } catch (error) {
            set({
                errorMessage: error.message || "An error occurred while fetching products",
                isLoading: false,
            });
        }
    },
}));

export default useProductsStore;