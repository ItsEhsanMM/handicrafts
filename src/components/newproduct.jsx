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
         <div className="h-fit px-8 py-10 rounded-2xl bg-primary">
            <SwiperComponent productDetail={Ask} />
         </div>
      </div>
   );
}
