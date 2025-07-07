import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "../product";

const SwiperComponent = ({ productDetail }) => {
   return (
      <Swiper
         spaceBetween={20}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
         breakpoints={{
            0: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         }}
      >
         {productDetail.map((image, i) => (
            <SwiperSlide key={i}>
               <Product {...image} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
export default SwiperComponent;
