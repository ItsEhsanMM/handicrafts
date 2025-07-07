import React from "react";
import Header from "./Header";
import Addto from "./addto";
import Footer from "./Footer";
import { imgs } from "../lib/const";
import Product from "./product";
let Aks = imgs[0].product;
export default function Shop() {
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
               <div className="flex flex-row-reverse justify-between">
                  <div className="w-[950px]  flex flex-wrap justify-center gap-[2.5rem]">
                     <div className="w-[100%] flex  justify-between border-zinc-500  p-[9px] rounded-2xl border-[1px]  items-center">
                        <span className="text-[25px]">فروشگاه</span>
                        <select
                           className="w-[230px] h-[40px] rounded-[5px] border-[1px] border-zinc-500 bg-[#F8F8F8] flex pl-[15px]"
                           name=""
                           id=""
                        >
                           <option value="فرش دستباف، گلیم و حصیر">
                              فرش دستباف، گلیم و حصیر
                           </option>
                           <option value="فرش دستباف، گلیم و حصیر">
                              فرش دستباف، گلیم و حصیر
                           </option>
                           <option value="فرش دستباف، گلیم و حصیر">
                              فرش دستباف، گلیم و حصیر
                           </option>
                        </select>
                     </div>
                     <div className="flex flex-wrap gap-[2.5rem] justify-center">
                        {Aks.map((image) => (
                           <Product {...image} />
                        ))}
                     </div>
                  </div>
                  <div className="flex-col  border-zinc-500 rounded-2xl w-[330px] flex  h-[423px]">
                     <div className="flex items-center gap-[1.5rem] flex-col w-[100%]">
                        <div className="flex flex-col gap-[15px]">
                           <div>
                              <input
                                 type="text"
                                 className="pr-[0.5rem] w-[300px] border-2 border-zinc-500 h-[45px] rounded-[9px]"
                                 placeholder="جستو جوی محصول"
                                 name=""
                                 id=""
                              />
                           </div>
                           <div>
                              <button className="w-[300px] h-[45px] shadow-2xl rounded-[9px]  bg-[#00A693] ">
                                 <span className="text-[#ffff]">
                                    اعمال فیلتر
                                 </span>
                              </button>
                           </div>
                        </div>
                        <div>
                           <span>فیلتر قیمت</span>
                        </div>
                        <div className="flex flex-col gap-[1.15rem]">
                           <select
                              className="w-[300px] h-[40px] rounded-[9px] border-[1pxp] border-zinc-500 bg-[#F8F8F8] flex p-[5px]"
                              name=""
                              id=""
                           >
                              <option value="فرش دستباف، گلیم و حصیر">
                                 فرش دستباف، گلیم و حصیر
                              </option>
                              <option value="فرش دستباف، گلیم و حصیر">
                                 فرش دستباف، گلیم و حصیر
                              </option>
                              <option value="فرش دستباف، گلیم و حصیر">
                                 فرش دستباف، گلیم و حصیر
                              </option>
                           </select>
                           <select
                              className="w-[300px] h-[40px] rounded-[9px] border-[1pxp] border-zinc-500 bg-[#F8F8F8] flex p-[5px]"
                              name=""
                              id=""
                           >
                              <option value="فرش دستباف، گلیم و حصیر">
                                 فرش دستباف، گلیم و حصیر
                              </option>
                              <option value="فرش دستباف، گلیم و حصیر">
                                 فرش دستباف، گلیم و حصیر
                              </option>
                              <option value="فرش دستباف، گلیم و حصیر">
                                 فرش دستباف، گلیم و حصیر
                              </option>
                           </select>
                           <div className="pt-[1.5rem]">
                              <button className="w-[300px] h-[45px] shadow-2xl rounded-[9px]   bg-[#00A693]">
                                 <span className="text-[#ffff]">
                                    اعمال فیلتر
                                 </span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
            <footer className="mt-[5rem]">
               <Footer />
            </footer>
         </div>
      </>
   );
}
