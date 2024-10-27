import React from 'react'
import {Baskervville ,Satisfy} from 'next/font/google';
import EngagementRing from '../assets/collections/engagement-ring.png';
import WeddingRing from '../assets/collections/wedding-ring.png';
import Necklace from '../assets/collections/fine-jewellery.png';
import { useRouter } from 'next/navigation';

const baskervville = Baskervville({
    weight: "400",
    subsets: ['latin']});
const satisfy = Satisfy({
    weight: "400",
    subsets: ['latin']
});


const ShopByCollections = () => {
    const router = useRouter();
    const collections = [
        {
            title: 'Engagement',
            image: `${EngagementRing.src}`,
            desc: "Celebrate your love with our stunning engagement rings.",
            className:'-bottom-12 -left-[10%] transform translate-x-[10%]',
            translateY:'lg:translate-y-[80%] translate-y-0',
            contentAlignment:'items-end'


        },
        {
            title: 'Fine Jewellery',
            image: `${Necklace.src}`,
            desc: "Elevate your look with our stunning necklaces.",
            className:'-bottom-12 left-1/2 transform -translate-x-1/2',
            translateY:'lg:translate-y-[50%] translate-y-0',
            contentAlignment:'items-center'
        },
        {
            title: 'Wedding Rings',
            image: `${WeddingRing.src}`,
            desc: "Find the perfect wedding ring to symbolize your love.",
            className:'-bottom-10 right-[5%] translate-x-[5%]',
            translateY:'lg:translate-y-[20%] translate-y-0',
            contentAlignment:'items-start'

        },
    ];
  return (
    <div className='w-full lg:h-screen h-max bg-primary lg:px-12 px-4 lg:py-12 py-4'>
       <div className={`${baskervville.className} w-full text-center` }>
        <h1 className='md:text-5xl text-3xl mb-4 text-onPrimary'>Shop By Collections</h1>
        <p className=''>Unveil stunning jewellery collections crafted to shine for every moment and style!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4  md:grid-cols-2 lg:grid-cols-3 gap-12">
        {collections.map((collection, index) => (
          <div
            onClick={()=>{
                router.push(`/browse-products`)
            }}
            key={index}
            className={`${collection.translateY} bg-white hover:scale-105 transition duration-700 p-6  md:my-0  rounded-2xl shadow-lg relative hover:shadow-xl `}
          >
             <div className={` pb-20 ${collection.contentAlignment} flex flex-col`}>
              <h3 className={`${satisfy.className} text-2xl  text-onPrimary mb-2`}>
                {collection.title}
              </h3>
              <p className="text-gray-600  w-[70%]">{collection.desc}</p>
            </div>
            <div className={`${collection.className} absolute`}>
              <img
                src={collection.image}
                alt={collection.title}
                className="w-[150px] h-[150px] object-cover"
              />
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopByCollections
