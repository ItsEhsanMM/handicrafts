import Title from "./title";
import Product from "./product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { imgs } from "../lib/const";

const Ask = imgs[0].product;

export default function Newproduct() {
   return (
      <div className="flex flex-col gap-[1.5rem]">
         <Title />
         <div className="h-fit p-6 md:p-[55px] rounded-[29px] bg-[#44E4D1]">
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
               {Ask.map((image, i) => (
                  <SwiperSlide key={i}>
                     <Product {...image} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
