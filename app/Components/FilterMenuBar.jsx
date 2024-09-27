import React from "react";
import { Baskervville,DM_Serif_Text } from "next/font/google";

const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
})

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] }); 



const filtersData = [
  {
    title: "Category",
    items: [
      { id: 1, name: "Necklaces" },
      { id: 2, name: "Rings" },
      { id: 3, name: "Bracelets" },
      { id: 4, name: "Earrings" },
      { id: 5, name: "Anklets" },
      { id: 6, name: "Bangles" },
    ],
  },
  {
    title: "Material",
    items: [
      { id: 1, name: "Gold" },
      { id: 2, name: "Silver" },
      { id: 3, name: "Platinum" },
      { id: 4, name: "Diamond" },
      { id: 5, name: "Pearl" },
      { id: 6, name: "Gemstone" },
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
      { id: 1, name: "Diamond" },
      { id: 2, name: "Ruby" },
      { id: 3, name: "Emerald" },
      { id: 4, name: "Sapphire" },
      { id: 5, name: "Pearl" },
      { id: 6, name: "Amethyst" },
    ],
  },
  {
    title: "Collections",
    items: [
      { id: 1, name: "Wedding" },
      { id: 2, name: "Casual Wear" },
      { id: 3, name: "Office Wear" },
      { id: 4, name: "Party Wear" },
      { id: 5, name: "Traditional" },
      { id: 6, name: "Modern" },
    ],
  },
  {
    title: "Occasion",
    items: [
      { id: 1, name: "Anniversary" },
      { id: 2, name: "Birthday" },
      { id: 3, name: "Wedding" },
      { id: 4, name: "Festival" },
      { id: 5, name: "Daily Wear" },
    ],
  },
];

const FilterMenuBar = () => {
 
  return (
        <sidebar className="md:h-max h-[75vh]  overflow-y-auto lg:w-[20%] md:z-0 z-50 md:w-[25%] w-[50%] top-[150px] left-0 md:static absolute bg-white shadow-sm rounded-lg p-4">
        <div className={`${dmSerifText.className}`}>
          <h1 className="text-2xl  text-onSurface ">Filters</h1>
        </div>
        <div className="my-2">
          <button className="px-4 py-1 text-center bg-accent rounded-md text-sm mr-4 mb-2">Apply</button> 
          <button className="px-5 py-1 text-center bg-surface rounded-md text-sm mr-4">Clear</button>
        </div>
        <div className="my-6 bg-accent h-0.5 w-full"></div>
        <div>
          {filtersData.map((filter, index) => {
            return (
              <div className="my-4 mx-2" key={index}>
                
                <h2 className={` uppercase  text-sm mb-2`}>{filter.title}</h2>
                <div className="flex flex-col">
                  {filter.items.map((item, index) => {
                    return (
                      <label
                        className="mx-2 my-1 "
                        key={item.id}
                        htmlFor="checkbox"
                      >
                        <input
                          type="checkbox"
                          name={item.name}
                          className="mr-2 cursor-pointer"
                          id={item.id}
                        />

                        <span className="text-sm">{item.name}</span>
                      </label>
                    );
                  })}
                  <div className="bg-accent h-0.5 w-full my-2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </sidebar> 
  );
};

export default FilterMenuBar;
