import { useState } from "react";
import star from "../assets/icons/star.svg";
import { useEffect } from "react";
import { imgs } from "../lib/const";
import SwiperComponent from "./shared/Swiper";

const Special = () => {
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(1);
   const [seconds, setSeconds] = useState(59);
   const Ask = imgs[0].product;

   useEffect(() => {
      const timer = setInterval(() => {
         if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
         } else if (seconds > 0) {
            setSeconds((prev) => prev - 1);
         } else if (minutes > 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
         } else if (hours > 0) {
            setHours((prev) => prev - 1);
            setMinutes(59);
            setSeconds(59);
         }
      }, 1000);

      return () => clearInterval(timer);
   }, [hours, minutes, seconds]);

   // Add leading zeros
   const format = (num) => String(num).padStart(2, "0");

   return (
      <section className="bg-secondary/75 rounded-xl p-5 flex flex-col items-center">
         <div className="flex items-center gap-x-2 mb-5">
            <img
               src={star}
               alt="star"
            />
            <span className="font-bold text-2xl">پیشنهاد ویژه</span>
         </div>
         <div className="flex items-center gap-x-2 mb-5">
            <div className="border-3 flex flex-col items-center justify-center border-box rounded-xl px-3 py-1">
               <h3 className="font-bold text-lg">{format(seconds)}</h3>
               <span className="text-xs">ثانیه</span>
            </div>
            <div className="border-3 flex flex-col items-center justify-center border-box rounded-xl px-3 py-1">
               <h3 className="font-bold text-lg">{format(minutes)}</h3>
               <span className="text-xs">دقیقه</span>
            </div>
            <div className="border-3 flex flex-col items-center justify-center border-box rounded-xl px-3 py-1">
               <h3 className="font-bold text-lg">{format(hours)}</h3>
               <span className="text-xs">ساعت</span>
            </div>
         </div>
         <div className="w-full">
            <SwiperComponent productDetail={Ask} />
         </div>
      </section>
   );
};
export default Special;
