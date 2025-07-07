import React from "react";
import Title from "./Title";
import { imgs } from "../lib/const";

const Ask = imgs[1].mobile;

export default function LastNews() {
   return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
         <Title title={"آخرین خبر ها"} />

         <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6">
            {/* Main news card */}
            <div className="relative bg-[#F9F9F9] rounded-2xl w-full lg:w-[63%] h-[clamp(300px,40vw,392px)] flex justify-center">
               <img
                  src={Ask[1].src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
               />
               <div className="relative z-10 max-w-[95%] sm:max-w-[600px] min-h-[100px] p-4 flex flex-col justify-between bg-[#F9F9F9] rounded-2xl m-4">
                  <div>
                     <span className="text-[clamp(14px,2vw,16px)] font-semibold leading-relaxed">
                        جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
                     </span>
                  </div>
                  <div className="flex justify-between items-center mt-4 gap-4 flex-wrap">
                     <span className="text-sm text-gray-700 max-w-[80%]">
                        روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵
                        مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این
                        ساعت…
                     </span>
                     <div className="w-8 h-8 flex items-center justify-center rounded-[9px] text-icon bg-primary text-lg">
                        {">"}
                     </div>
                  </div>
               </div>
            </div>

            {/* Side news list */}
            <div className="flex flex-col gap-4 w-full lg:w-[35%]">
               {Ask.map((images, index) => (
                  <div
                     key={index}
                     className="flex gap-4 p-3 bg-box rounded-2xl items-start"
                  >
                     <div className="w-[100px] h-[100px] shrink-0 rounded-[9px] overflow-hidden">
                        <img
                           className="w-full h-full object-cover"
                           src={images.src}
                           alt=""
                        />
                     </div>
                     <div className="flex flex-col justify-between flex-1">
                        <span className="text-[15px] font-medium leading-tight">
                           جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان
                           می‌دهند
                        </span>
                        <span className="text-[13px] text-gray-600 leading-snug mt-1">
                           لورم ایپسوم متن ساختگی با تولید سادگی مفهوم از صنعت
                           چاپ گرافیک است.
                        </span>
                        <div className="flex justify-between items-center mt-2">
                           <div className="text-xs text-gray-500 flex gap-2">
                              <span>یک دیدگاه</span>
                              <span>16 مهر 1401</span>
                           </div>
                           <div className="w-8 h-8 flex items-center justify-center rounded-[9px] bg-primary text-icon text-lg">
                              {">"}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
