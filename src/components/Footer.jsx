import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { footer } from "../lib/const";

export default function Footer() {
   const items = footer;
   return (
      <>
         <div className="h-fit p-[25px] bg-green-300 rounded-[25px] flex flex-wrap ">
            <div className="flex w-[100%]  h-fit justify-between    flex-row-reverse border-b-4 border-indigo-500 pb-[25px]">
               <div className="flex gap-[1.5rem] h-fit ">
                  {items.map((item) => (
                     <div>
                        <div className=" w-[144] flex flex-col text-[13px] gap-[25px]">
                           <h2 className="text-[16px]">{item.title}</h2>
                           <ul className="flex flex-col gap-[15px]">
                              {item.subtitle.map((link) => (
                                 <li>{link.text}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>
               <div className=" text-[13px] max-w-[567px] flex-wrap  flex justify-between items-start gap-[15px]">
                  <div className="flex items-center gap-[2.5rem]">
                     <img
                        className="w-[55px] h-[55px]"
                        src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/footer-logo.svg"
                        alt=""
                     />
                     <span className="text-[24px]">فروشگاه صنایع دستی</span>
                  </div>
                  <div>
                     <span>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                     </span>
                  </div>
                  <div className="flex justify-between w-[100%]">
                     <div className="flex gap-[12px] text-[13px]   flex-col">
                        <h2 className="text-[15px]">نماد اعتماد الکترونیک</h2>
                        <span>
                           لورم ایپسوم متن ساختگی با تولید سادگی صنعت چاپ است.
                        </span>
                     </div>
                     <div className="flex gap-[1.5rem]">
                        <div className="w-[80px] h-[80px] rounded-[20px] flex items-center justify-center bg-amber-400">
                           <h1>مجوز</h1>
                        </div>
                        <div className="w-[80px] h-[80px] rounded-[20px] flex items-center justify-center bg-amber-400">
                           <h1>مجوز</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="p-[0.5rem] pt-[15px] gap-[15px] flex flex-wrap text-[14px] justify-between">
               <div className="gap-[25px ] ">
                  <div className="flex gap-[5px] sm:text-[13px] md:text-[18px] lg:text-[22px]">
                     <FaLocationDot />
                     <span>ادرس ما :</span>
                  </div>
                  <span>تهران، ولیعصر، کوچه طراحان سایت، پلاک 15، طبقه2</span>
               </div>
               <div className="gap-[25px ]">
                  <div className="flex gap-[5px] ">
                     <FaPhone />
                     <span>ادرس ما :</span>
                  </div>
                  <span>تهران، ولیعصر، کوچه طراحان سایت، پلاک 15، طبقه2</span>
               </div>
               <div className="flex justify-center items-center w-[100%] pt-[25px]">
                  <span>
                     تمامی حقوق متعلق به سایت آماده فروشگاه صنایع دستی می باشد
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}
