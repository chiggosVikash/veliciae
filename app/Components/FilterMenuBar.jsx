import React from "react";
import { DM_Serif_Text } from "next/font/google";
import useFilterOptionsStore from "../stores/filterOptionsStore";
import useProductsStore from "../stores/productsStore";
// const baskervville = Baskervville({
//   weight: "400",
//   subsets: ["latin"],
// })

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] }); 





const filtersData = [
  {
    title: "Category",
    items: [
      { id: 1, name: "Gold", value: "gold" },
      { id: 2, name: "Silver" , value: "silver"},
      { id: 3, name: "Platinum" , value: "platinum"},
      { id: 4, name: "Diamond" , value: "diamond"},
      { id: 5, name: "Pearl" , value: "pearl"},
      { id: 6, name: "Gemstone", value: "gemstone" },
    ],
  },
  {
    title: "Material",
    items: [
      { id: 1, name: "18K" },
      { id: 2, name: "14K" },
      { id: 3, name: "10K" },
      { id: 4, name: "9K" },
      { id: 5, name: "8K" },
      { id: 6, name: "7K" },
    ],
  },
  {
    title: "Price Range",
    items: [
      { id: 1, name: "Below \u20b9100" },
      { id: 2, name: "\u20b9100 - \u20b9500" },
      { id: 3, name: "\u20b9500 - \u20b91,000" },
      { id: 4, name: "\u20b91,000 - \u20b95,000" },
      { id: 5, name: "Above \u20b95,000" },
    ],
  },
  {
    title: "Stone Type",
    items: [
      { id: 1, name: "Diamond" , value: "diamond"},
      { id: 2, name: "Ruby" , value: "ruby"},
      { id: 3, name: "Emerald" , value: "emerald"},
      { id: 4, name: "Sapphire" , value: "sapphire"},
      { id: 5, name: "Pearl" , value: "pearl"},
      { id: 6, name: "Amethyst", value: "amethyst" },
    ],
  },
  {
    title: "Collections",
    items: [
      { id: 1, name: "Anniversary" , value: "anniversary"},
      { id: 2, name: "Birthday" , value: "birthday"},
      { id: 3, name: "Wedding" , value: "wedding"},
      { id: 4, name: "Festival" , value: "festival"},
      { id: 5, name: "Daily Wear" , value: "dailywear"},
      { id: 6, name: "Traditional" , value: "traditional"},
    ],
  },
  {
    title: "Occasion",
    items: [
      { id: 1, name: "Anniversary" , value: "anniversary"},
      { id: 2, name: "Birthday" , value: "birthday"},
      { id: 3, name: "Wedding" , value: "wedding"},
      { id: 4, name: "Festival" , value: "festival"},
     
    ],
  },
];



const FilterMenuBar = () => {
  const { addFilterOption, removeFilterOption, clearFilterOptions, filterOptions } = useFilterOptionsStore();
  const {getProducts} = useProductsStore();
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      addFilterOption(name.toLowerCase());
    } else {
      removeFilterOption(name);
    }
  };

  const handleApplyFilters = ()=>{
    getProductsByFilters(filterOptions);
  }

  const handleClearFilters = ()=>{
    clearFilterOptions();
    getProductsByFilters([]);
  }

  function getProductsByFilters(filterOptions){
    const args = {
      filters: filterOptions,
      reqCount:0,
      limit:15,
    }
    getProducts(args);
  }



  return (
    <sidebar className="md:h-max h-[75vh] overflow-y-auto lg:w-[20%] md:z-0 z-50 md:w-[25%] w-[50%] top-[150px] left-0 md:static absolute bg-white shadow-sm rounded-lg p-4">
      <div className={`${dmSerifText.className}`}>
        <h1 className="text-2xl  text-onSurface ">Filters</h1>
      </div>
      <div className="my-2">
        <button 
        disabled={filterOptions.length===0}
        onClick={handleApplyFilters}
        className="px-4 py-1 text-center bg-accent rounded-md text-sm mr-4 mb-2">Apply</button> 
        <button 
        disabled={filterOptions.length===0}
        onClick={handleClearFilters}
        className="px-5 py-1 text-center bg-surface rounded-md text-sm mr-4">Clear</button>
      </div>
      <div className="my-6 bg-accent h-0.5 w-full"></div>
      <div>
        {filtersData.map((filter, index) => (
          <div className="my-4 mx-2" key={index}>
            <h2 className={`uppercase text-sm mb-2`}>{filter.title}</h2>
            <div className="flex flex-col">
              {filter.items.map((item) => (
                <label
                  className="mx-2 my-1"
                  key={item.id}
                  htmlFor={`checkbox-${item.id}`}
                >
                  <input
                    onChange={handleFilterChange}
                    type="checkbox"
                    name={item.name}
                    className="mr-2 cursor-pointer"
                    id={`checkbox-${item.id}`}
                    checked={filterOptions.includes(item.value)}
                  />
                  <span className="text-sm">{item.name}</span>
                </label>
              ))}
            </div>
            <div className="bg-accent h-0.5 w-full my-2"></div>
          </div>
        ))}
      </div>
    </sidebar>
  );
};

export default FilterMenuBar;
