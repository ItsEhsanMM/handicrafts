import { imgs } from "../lib/const";
import Title from "./title";
import SwiperComponent from "./shared/Swiper";
export default function Popular() {
   const Ask = imgs;
   return (
      <>
         <div className="flex flex-col space-y-5">
            <Title title={"محبوب ترین محصولات"} />
            <div className="h-[450px] p-[55px] flex items-center justify-center relative rounded-[29px] ">
               <div className="h-[323px] w-[100%] absolute rounded-3xl top-20 bg-secondary shadow-2xl"></div>
               <div className="h-[323px] w-[90%] absolute rounded-3xl top-10 bg-primary shadow-2xl"></div>
               <div className="absolute w-[85%] top-0">
                  <SwiperComponent productDetail={Ask} />
               </div>
            </div>
         </div>
      </>
   );
}
