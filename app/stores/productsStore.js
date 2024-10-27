import axios from "axios";
import { create } from "zustand";
import { browseEndPoint,productsEndPoint } from "../shared/endPoints";

const useProductsStore = create((set) => ({
    products: [],
    errorMessage: "",
    isLoading: false,

    getProducts: async (args) => {
       
        try {
            set({ isLoading: true, errorMessage: "" });
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


export const useProductStore = create((set) => ({
    product: {},
    errorMessage: "",
    isLoading: true,
    getProduct: async (id) => {
        try {
            const response = await axios.get(`${productsEndPoint}/${id}`);
            set({ product: response.data.data, isLoading: false });
        } catch (error) {
            set({
                errorMessage: error.message || "An error occurred while fetching product",
                isLoading: false,
            });
        }
    }
}))

