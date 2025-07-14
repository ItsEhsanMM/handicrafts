import { FaArrowLeftLong } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { blogs } from "../lib/const";

export default function Weblog() {
   const slider = [1, 2, 3, 4, 5];
   const number = [1, 2, 3, 4, 5, 8, 9];

   return (
      <main className="space-y-8">
         {/* Top slider & sidebar */}
         <div className="flex flex-col md:flex-row gap-6 lg:gap-10 mt-6">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-2xl rounded-2xl p-6">
               <ul className="flex flex-col justify-evenly h-full gap-6">
                  {blogs.map((item, i) => (
                     <li
                        key={i}
                        className="text-right text-[clamp(14px,2vw,18px)] text-zinc-700"
                     >
                        {item.title}
                     </li>
                  ))}
               </ul>
            </div>

            <div className="w-full lg:w-3/4 grid grid-cols-3 gap-4">
               {slider.map((_, idx) => (
                  <div
                     key={idx}
                     className="text-white w-full h-[222px] relative flex justify-center rounded-2xl bg-green-400"
                  >
                     <img
                        className="w-full h-full object-cover rounded-2xl"
                        src="https://presite.ir/Handicrafts/wp-content/uploads/2022/10/dynamic-island.jpg"
                        alt=""
                     />
                     <div className="flex gap-2 absolute bottom-6 flex-col justify-center w-[210px] h-[58px] text-center mx-auto">
                        <div className="flex justify-center gap-2 text-xs">
                           <span>16 مهر 1401</span>
                           <span>بدون دیدگاه</span>
                        </div>
                        <span className="text-sm">
                           بررسی ادوپرفیوم ویکتوریا سکرت
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Section Header */}
         <div className="">
            <div className="flex flex-col text-[clamp(18px,3vw,30px)] items-start justify-center gap-4">
               <div className="flex items-center gap-4">
                  <span className=" font-medium">آخرین مطالب</span>
                  <div className="px-6 py-1 bg-zinc-600 rounded-full">
                     <span className="text-white">Recent Articles</span>
                  </div>
               </div>
               <div className="border-dotted border-t border-gray-300 w-full h-px mt-2 sm:mt-0" />
            </div>
         </div>

         {/* Articles grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {number.map((_, idx) => (
               <div
                  key={idx}
                  className="w-full border-2 border-zinc-200 rounded-2xl overflow-hidden bg-white"
               >
                  <div className="h-[200px] w-full">
                     <img
                        className="w-full h-full object-cover rounded-t-2xl"
                        src="https://presite.ir/Handicrafts/wp-content/uploads/2022/10/blog-new-11.jpg"
                        alt=""
                     />
                  </div>
                  <div className="p-4 flex flex-col gap-5">
                     <span className="text-xs text-zinc-600">
                        4 دقیقه زمان مطالعه
                     </span>
                     <span className="text-base font-semibold leading-snug">
                        شیائومی جزیره پویا را به ردمی K60 اضافه نمی‌کند
                     </span>
                     <span className="text-sm text-zinc-600 leading-snug">
                        پیش‌تر خبری منتشر شد مبنی بر اینکه شیائومی می‌خواهد
                        قابلیت جزیره پویا را به ردمی K60 اضافه کند؛ اما حالا
                        متوجه شده‌ایم این اتفاق
                     </span>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 flex-row-reverse">
                           <span className="text-sm text-zinc-500">
                              3 سال قبل
                           </span>
                           <div className="w-[45px] h-[45px] rounded-full bg-zinc-100 flex items-center justify-center">
                              <CiUser className="w-[25px] h-[25px]" />
                           </div>
                        </div>
                        <div className="w-[65px] h-[43px] rounded-r-[25px] bg-zinc-50 hover:bg-[#00A693] transition-all flex items-center justify-center">
                           <FaArrowLeftLong className="w-[25px] h-[25px]" />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Banner */}
         <div className="py-10">
            <img
               className="w-full h-auto object-cover rounded-2xl"
               src="https://presite.ir/Handicrafts/wp-content/uploads/2022/10/blog-banner-2-1.png"
               alt=""
            />
         </div>
      </main>
   );
}
