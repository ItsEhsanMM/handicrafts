import Title from "./Title";
import Product from "./product";
// Import Swiper React components

import { imgs } from "../lib/const";
import SwiperComponent from "./shared/Swiper";

const Ask = imgs[0].product;

export default function Newproduct() {
   return (
      <div className="flex flex-col gap-[1.5rem]">
         <Title title={"جدیدترین محصولات"} />
         <div className="h-fit p-6 md:p-[55px] rounded-[29px] bg-[#44E4D1]">
            <SwiperComponent productDetail={Ask} />
         </div>
      </div>
   );
}
