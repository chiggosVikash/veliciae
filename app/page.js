import React from 'react'
import CaraoselSlider from './Components/CaraoselSlider'
import ShopByCategorySection from './Components/ShopByCategorySection'
import ShopByCollections from './Components/ShopByCollections'
import SubBanner from './Components/SubBanner'
import LatestProductsSection from './Components/LatestProductsSection'
import ShopByGenderSection from './Components/ShopByGenderSection'


const page = () => {
  return (
    <div>
      <CaraoselSlider />
      <ShopByCategorySection />
      <ShopByCollections />
      <SubBanner />
      <LatestProductsSection/>
      <ShopByGenderSection/>


      {/* <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mt-8">Welcome to Tanishq</h1>
        <p className="text-center mt-4">Your one stop destination for Gold</p>
      </div> */}
    </div>
  )
}

export default page
