import React from "react";
import Title from "./title";
import { imgs } from "../lib/const";
const Ask = imgs[1].mobile;
export default function LassNews() {
   const numbers = [1, 2, 3];
   return (
      <>
         <div className="py-[1.5rem] ">
            <Title />
            <div className="flex flex-wrap  justify-between">
               <div className="h-[392px] w-[638px] relative flex justify-center  bg-[#F9F9F9] rounded-2xl">
                  <img
                     src={Ask[1].src}
                     className="w-[100%] h-[100%] object-cover rounded-2xl"
                     alt=""
                  />
                  <div className="max-w-[600px] min-h-[100px] p-[10px] flex flex-col justify-between absolute bottom-[15px] bg-[#F9F9F9]  rounded-2xl">
                     <div>
                        <span>
                           جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان
                           می‌دهند
                        </span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[14px] w-[450px]">
                           روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                           تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از
                           رونمایی این ساعت…
                        </span>
                        <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[9px] bg-green-800">
                           <span className="text-[19px] text-[#ffff]">
                              {">"}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col justify-between">
                  {Ask.map((images) => (
                     <div className="max-w-[612px] min-h-[111px] p-[10px] rounded-2xl flex gap-[0.5rem] bg-[#F9F9F9]">
                        <div className="w-[100px] h-[100px] rounded-[9px]">
                           {/* ... */}
                           <img
                              className="w-[100%] h-[100%] object-cover rounded-2xl"
                              src={images.src}
                              alt=""
                           />
                        </div>

                        <div className="flex flex-col justify-between">
                           <span className="text-[15px]">
                              جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان
                              می‌دهند
                           </span>
                           <span className="text-[13px]">
                              لورم ایپسوم متن ساختگی با تولید سادگی مفهوم از
                              صنعت چاپ گرافیک است.
                           </span>
                           <div className="flex justify-between">
                              <div>
                                 <span>یک دیدگاه</span>
                                 <span>16 مهر 1401</span>
                              </div>
                              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[9px] bg-green-800">
                                 <span className="text-[19px] text-[#ffff]">
                                    {">"}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
