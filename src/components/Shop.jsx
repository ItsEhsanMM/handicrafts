import { useState } from "react";
import { imgs } from "../lib/const";
import Product from "./product";
import SearchInput from "./shared/SearchInput";

let Aks = imgs[0].product;

export default function Shop() {
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(5000000);
   return (
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
         {/* فیلتر سایدبار */}
         <aside className="w-full lg:w-[330px] rounded-2xl">
            <div className="flex flex-col items-center gap-6">
               {/* سرچ */}
               <div className="w-full flex flex-col gap-4">
                  <SearchInput />
                  <button className="w-full h-11 bg-primary text-white rounded-lg shadow">
                     اعمال فیلتر
                  </button>
               </div>

               <div className="w-full text-right font-medium text-text">
                  <span>فیلتر قیمت</span>
               </div>

               <div className="w-full flex flex-col gap-4 text-right">
                  <div className="relative h-6">
                     {/* Min Price Input */}
                     <input
                        type="range"
                        min="0"
                        max="5000000"
                        step="10000"
                        value={minPrice}
                        onChange={(e) =>
                           setMinPrice(
                              Math.min(
                                 Number(e.target.value),
                                 maxPrice - 100000
                              )
                           )
                        }
                        className="absolute w-full cursor-pointer pointer-events-none appearance-none bg-transparent z-20 
            [&::-webkit-slider-thumb]:pointer-events-auto 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:h-4 
            [&::-webkit-slider-thumb]:translate-y-1
            [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-primary 
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-white"
                     />

                     {/* Max Price Input */}
                     <input
                        type="range"
                        min="0"
                        max="5000000"
                        step="10000"
                        value={maxPrice}
                        onChange={(e) =>
                           setMaxPrice(
                              Math.max(
                                 Number(e.target.value),
                                 minPrice + 100000
                              )
                           )
                        }
                        className="absolute w-full cursor-pointer pointer-events-none appearance-none bg-transparent z-10 
            [&::-webkit-slider-thumb]:pointer-events-auto 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:h-4 
            [&::-webkit-slider-thumb]:translate-y-1
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-primary 
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-white"
                     />

                     {/* Track (gray background) */}
                     <div className="absolute top-1/2 w-full h-1 bg-zinc-300 rounded -translate-y-1/2" />

                     {/* Selected range*/}
                     <div
                        className="absolute top-1/2 h-1 bg-primary rounded -translate-y-1/2"
                        style={{
                           right: `${(minPrice / 5000000) * 100}%`,
                           width: `${((maxPrice - minPrice) / 5000000) * 100}%`,
                        }}
                     />
                  </div>

                  {/* Price labels BELOW */}
                  <div className="flex justify-center text-sm text-text px-1">
                     <span>{minPrice.toLocaleString()} تومان</span>
                     <span className="mx-2">-</span>
                     <span>{maxPrice.toLocaleString()} تومان</span>
                  </div>
               </div>

               <div className="w-full flex flex-col gap-4">
                  <select className="w-full h-10 rounded-lg border border-zinc-400 bg-box px-2 text-sm">
                     <option>فرش دستباف، گلیم و حصیر</option>
                     <option>فرش دستباف، گلیم و حصیر</option>
                     <option>فرش دستباف، گلیم و حصیر</option>
                  </select>
                  <select className="w-full h-10 rounded-lg border border-zinc-400 bg-box px-2 text-sm">
                     <option>فرش دستباف، گلیم و حصیر</option>
                     <option>فرش دستباف، گلیم و حصیر</option>
                     <option>فرش دستباف، گلیم و حصیر</option>
                  </select>
                  <button className="w-full h-11 bg-primary text-white rounded-lg shadow mt-4">
                     اعمال فیلتر
                  </button>
               </div>
            </div>
         </aside>

         {/* محتوای محصولات */}
         <section className="w-full flex flex-col gap-6">
            {/* هدر فروشگاه */}
            <div className="w-full flex justify-between items-center gap-4 border border-zinc-300 rounded-2xl px-4 py-3">
               <span className="text-lg sm:text-xl font-semibold text-text">
                  فروشگاه
               </span>
               <select className="w-full sm:w-[230px] h-10 rounded-md border border-zinc-400 bg-box px-3 text-sm">
                  <option>فرش دستباف، گلیم و حصیر</option>
                  <option>فرش دستباف، گلیم و حصیر</option>
                  <option>فرش دستباف، گلیم و حصیر</option>
               </select>
            </div>

            {/* گرید محصولات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {Aks.map((image, index) => (
                  <Product
                     key={index}
                     {...image}
                  />
               ))}
            </div>
         </section>
      </div>
   );
}
