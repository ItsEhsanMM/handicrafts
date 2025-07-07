import React from "react";
import Addto from "./addto";
import Title from "./title";
import Product from "./product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { imgs } from "../lib/const";
const Ask = imgs[0].product;
export default function Newproduct() {
   const number = [1, 2, 3, 4, 5, 6, 7];
   return (
      <>
         <div className="flex flex-col gap-[1.5rem] ">
            <Title />
            <div className="h-fit p-[55px] rounded-[29px] bg-[#44E4D1]">
               <Swiper
                  spaceBetween={20}
                  slidesPerView={4}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  {Ask.map((image) => (
                     <SwiperSlide>
                        <Product {...image} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </>
   );
}
