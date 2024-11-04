'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ProductDetailsSection = (props) => {
  const details = props.props;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-onPrimary mb-4 text-center sm:text-left">Product Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-surface bg-opacity-10 p-4 rounded-lg"
        >
          <h3 className="text-lg font-medium text-onPrimary mb-3">Jewellery Specifications</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Category: {details.category && details.category.toUpperCase()}</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>{details.materialSpecs.length > 0 ? details.materialSpecs[0].materialType : ""} Quality: {details.materialSpecs.length > 0 ? details.materialSpecs[0].quality : ""}</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Material Weight: {details.materialSpecs.length > 0 ? details.materialSpecs[0].materialWeight : ""}</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Collection : {details.productCollection}</li>
          </ul>
        </motion.div>
        {/* <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-surface bg-opacity-10 p-4 rounded-lg"
        >
          <h3 className="text-lg font-medium text-onPrimary mb-3">Design Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Style: Modern Curved Triangle</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Band Width: 2mm</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Finish: High Polish</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Gemstone Shape: Round Brilliant Cut</li>
          </ul>
        </motion.div> */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-surface bg-opacity-10 p-4 rounded-lg"
        >
          <h3 className="text-lg font-medium text-onPrimary mb-3">Care Instructions</h3>
          <ul className="space-y-2 text-gray-700">
            {
              details.careInstructions.length  === 0 ? <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>No care instructions available</li> : ""
            }
            {
              details.careInstructions.map((instruction, index) => {
                return (
                  <li key={index} className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>{instruction}</li>
                )
              })
            }
            {/* <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Clean with a soft, lint-free cloth</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Avoid exposure to harsh chemicals</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Store in a cool, dry place</li>
            <li className="text-sm flex items-center"><span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>Professional cleaning recommended every 6 months</li> */}
          </ul>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4"
      >
        {/* <h3 className="text-xl font-medium text-onPrimary mb-3">Product Description</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          This exquisite Curved Triangle Diamond Ring from Pihtara Jewels Himalayan collection 
          showcases the perfect blend of modern design and timeless elegance. Crafted with 
          18K white gold and adorned with high-quality diamonds, this ring is a stunning 
          representation of the majestic Himalayas. The unique curved triangle design 
          symbolizes the peaks of the mountains, making it a truly special piece for any 
          jewelry enthusiast.
        </p> */}
      </motion.div>
    </motion.div>
  )
}

export default ProductDetailsSection
