import Header from "./Header";
import Footer from "./Footer";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { blogs } from "../lib/const";
export default function Weblog() {
   const slider = [1, 2, 3];
   const number = [1, 2, 3, 4, 5, 8, 9, 10];
   return (
      <>
         <div
            dir="rtl"
            className=""
         >
            <header>
               <Header />
            </header>
            <main>
               <div>
                  <div className="flex justify-between flex-row-reverse">
                     <div className="w-[1019px] h-[460px] flex justify-between flex-wrap">
                        {slider.map(() => (
                           <div className="text-[#ffff]  w-[327px] relative flex justify-center max-w-[506px] h-[222px] rounded-2xl bg-green-400">
                              <img
                                 className="w-[100%] rounded-2xl h-[100%]"
                                 src="https://presite.ir/Handicrafts/wp-content/uploads/2022/10/dynamic-island.jpg"
                                 alt=""
                              />
                              <div className="flex gap-[0.5rem] absolute bottom-[25px] flex-col justify-center w-[210px] h-[58px]">
                                 <div className="flex justify-center gap-[.5rem] text-[12px] ">
                                    <span>16 مهر 1401</span>
                                    <span>بدون دیدگاه</span>
                                 </div>
                                 <span>بررسی ادوپرفیوم ویکتوریا سکرت</span>
                              </div>
                           </div>
                        ))}

                        <div className="min-w-[327px] flex justify-center relative w-[506px] max-w-[506px] h-[222px] rounded-2xl bg-green-400">
                           <img
                              src=""
                              alt=""
                           />
                           <div className="flex gap-[0.5rem] absolute bottom-[25px] flex-col justify-center w-[210px] h-[58px]">
                              <div className="flex justify-center gap-[.5rem] text-[12px] ">
                                 <span>16 مهر 1401</span>
                                 <span>بدون دیدگاه</span>
                              </div>
                              <span>بررسی ادوپرفیوم ویکتوریا سکرت</span>
                           </div>
                        </div>
                        <div className="min-w-[327px] flex justify-center relative w-[506px] max-w-[506px] h-[222px] rounded-2xl bg-green-400">
                           <img
                              src=""
                              alt=""
                           />
                           <div className="flex gap-[0.5rem] absolute bottom-[25px] flex-col justify-center w-[210px] h-[58px]">
                              <div className="flex justify-center gap-[.5rem] text-[12px] ">
                                 <span>16 مهر 1401</span>
                                 <span>بدون دیدگاه</span>
                              </div>
                              <span>بررسی ادوپرفیوم ویکتوریا سکرت</span>
                           </div>
                        </div>
                     </div>
                     <div className="w-[239px] flex pr-[2.5rem] pt-[2.5rem] h-[488px] rounded-2xl shadow-2xl bg-[#ffff]">
                        <ul className="flex flex-col gap-[1.25rem]">
                           {blogs.map((item) => (
                              <li>{item.title}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="py-[25px]">
                     <div className="flex items-center">
                        <div className="min-w-[264px] flex justify-center items-center gap-[1.5rem] h-[32px]">
                           <span>آخرین مطالب</span>
                           <div className="p-[5px] flex items-center justify-center w-fit bg-zinc-600 rounded-[15px]">
                              <span className="text-[14px]">
                                 Recent Articles
                              </span>
                           </div>
                        </div>
                        <div className="border-dotted w-[100%] h-[1px] border-[1px]"></div>
                     </div>
                     <div className="pt-[4.5rem] flex flex-wrap justify-between gap-[.75rem]">
                        {number.map(() => (
                           <div className="w-[310px] h-[466px] border-[2px] border-zinc-200 rounded-2xl">
                              <div className="h-[200px]  w-[100%]">
                                 <img
                                    className="w-[100%] h-[100%] rounded-t-2xl"
                                    src="https://presite.ir/Handicrafts/wp-content/uploads/2022/10/blog-new-11.jpg"
                                    alt=""
                                 />
                              </div>
                              <div className="flex flex-col gap-[1.25rem] pr-[.5rem]">
                                 <span className="text-[13px] text-zinc-600">
                                    4 دقیقه زمان مطالعه
                                 </span>
                                 <span className="text-[20px]">
                                    شیائومی جزیره پویا را به ردمی K60 اضافه
                                    نمی‌کند
                                 </span>
                                 <span className="text-[12px] text-zinc-600">
                                    پیش‌تر خبری منتشر شد مبنی بر اینکه شیائومی
                                    می‌خواهد قابلیت جزیره پویا را به ردمی K60
                                    اضافه کند؛ اما حالا متوجه شده‌ایم این اتفاق
                                 </span>
                                 <div className="flex justify-between">
                                    <div className="flex items-center   gap-[.5rem] flex-row-reverse">
                                       <span className="text-[13px] text-zinc-500">
                                          3 سال قبل
                                       </span>
                                       <div className="w-[45px] flex items-center justify-center h-[45px] rounded-[50%] bg-zinc-100">
                                          <CiUser className="w-[25px] h-[25px]" />
                                       </div>
                                    </div>
                                    <div className="w-[65px] flex items-center justify-center hover:bg-[#00A693] transition-all rounded-r-[25px] h-[43px] bg-zinc-50">
                                       <FaArrowLeftLong className="w-[25px] h-[25px]" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className=" py-[4.5rem] flex items-center justify-center w-[100%]">
                     <img
                        className="w-[100%]"
                        src="https://presite.ir/Handicrafts/wp-content/uploads/2022/10/blog-banner-2-1.png"
                        alt=""
                     />
                  </div>
               </div>
            </main>
            <footer>
               <Footer />
            </footer>
         </div>
      </>
   );
}
