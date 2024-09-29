'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageCard from './ImageCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y}  from 'swiper/modules';


const ImageSwiper = () => {
    
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);

  return (
    <Swiper
      className='md:h-[40vh] lg:[50vh] h-[30vh]'
      navigation={true}
      slidesPerView={3}
      breakpoints={{
        320: {  // Mobile screens
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {  // Tablets
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {  // Medium desktops
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {  // Large desktops
          slidesPerView: 3,
          spaceBetween: 30,}}}
      onSwiper={(swiper) => {
        
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    >
      <SwiperSlide 
       ><ImageCard/></SwiperSlide>
      <SwiperSlide 
       ><ImageCard/></SwiperSlide>
      <SwiperSlide><ImageCard/></SwiperSlide>
      <SwiperSlide><ImageCard/></SwiperSlide>
      <SwiperSlide><ImageCard/></SwiperSlide>
      <SwiperSlide><ImageCard/></SwiperSlide>
      <SwiperSlide><ImageCard/></SwiperSlide>
      <SwiperSlide><ImageCard/></SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default ImageSwiper;
