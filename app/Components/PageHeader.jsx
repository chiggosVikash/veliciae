
import React from 'react'
import Image from 'next/image'
const PageHeader = ({header,icon}) => {
  return (
    <div className={`flex items-center justify-center mt-8`}>
        <div className='sm:flex  hidden h-[1px] w-[30%] bg-gray-300'></div>
        <div className="flex px-6  items-center py-3 mx-6 border-2 border-primary rounded-tl-[30%] rounded-br-[30%]">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-onPrimary whitespace-nowrap ">
            {header}
          </h1>
          {icon?<Image src={icon.src} alt="icon" width={40} height={24} className="mx-4 w-[20px] h-[15px] sm:w-[30px] sm:h-[18px] md:w-[40px] md:h-[35px] object-contain"/>:null}
        </div>
        <div className='sm:flex  hidden h-[1px] w-[30%] bg-gray-300'></div>

    </div>    

  )
}

export default PageHeader
