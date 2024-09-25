import React from 'react'
import SubBannerImage from '../assets/sub-banner.png';

const SubBanner = () => {
  return (
    <div className='px-6 my-8 '>
      <img src={SubBannerImage.src} alt="Sub Banner Image" className='w-full h-full object-cover' />
    </div>
  )
}

export default SubBanner
