import { create } from "zustand";
const useFilterOptionsStore = create((set)=>({
    filterOptions:[],
    addFilterOption: (option)=>set((state)=>({filterOptions:[...state.filterOptions,option]})),
    clearFilterOptions: ()=>set({filterOptions:[]}),
    removeFilterOption: (option)=>set((state)=>({filterOptions:state.filterOptions.filter(opt=>opt!==option)}))
}))

export default useFilterOptionsStore;