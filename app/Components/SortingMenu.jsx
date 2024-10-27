import React from 'react'

const SortingMenu = () => {
    const sortingMenu = ["Relevance","Price (Low to High)", "Price (High to Low)", "Latest Arrivals", ];
  return (
    <div className='bg-white inline md:py-1 px-2 rounded-md shadow-sm text-sm border-2 border-accent'>
      <label 
        htmlFor="Sorting">
        Sort By:
        <select 
            className='ring-0 bg-transparent focus:outline-none rounded-md p-1'
            name="sorting" id="sorting">
            {sortingMenu.map((item)=>{
                return <option 
                        key={item}
                        className='py-2 text-sm'
                        value={item}>{item}</option>
            })}
        </select>
         
      </label>
    </div>
  )
}

export default SortingMenu
