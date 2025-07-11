// import React from 'react'
// import { FaLocationDot } from "react-icons/fa6"
// import { FaPhone } from "react-icons/fa"
// import { footer } from '../lib/const'

// export default function Footer() {
//     const items = footer

//     return (
//         <div className='bg-green-300 rounded-[25px] p-6 sm:p-8 lg:p-[25px] flex flex-col gap-6'>
//             {/* بخش بالا */}
//             <div className='w-full flex flex-col lg:flex-row-reverse justify-between gap-6 border-b-4 border-indigo-500 pb-6'>

//                 {/* منوهای دسته‌بندی */}
//                 <div className='flex flex-wrap gap-6 justify-start lg:justify-end w-full lg:w-auto'>
//                     {
//                         items.map((item, idx) => (
//                             <div key={idx} className='min-w-[140px] text-sm flex flex-col gap-5'>
//                                 <h2 className='text-base font-semibold'>{item.title}</h2>
//                                 <ul className='flex flex-col gap-2'>
//                                     {item.subtitle.map((link, i) => (
//                                         <li key={i}>{link.text}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))
//                     }
//                 </div>

//                 {/* توضیحات فروشگاه */}
//                 <div className='text-sm w-full lg:max-w-[567px] flex flex-col gap-5'>
//                     <div className='flex items-center gap-4'>
//                         <img className='w-12 h-12 sm:w-[55px] sm:h-[55px]' src='https://presite.ir/Handicrafts/wp-content/uploads/2023/07/footer-logo.svg' alt="" />
//                         <span className='text-lg sm:text-xl'>فروشگاه صنایع دستی</span>
//                     </div>

//                     <p className='leading-relaxed text-justify'>
//                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
//                     </p>

//                     <div className='flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8'>
//                         <div className='flex flex-col gap-2'>
//                             <h3 className='text-base font-semibold'>نماد اعتماد الکترونیک</h3>
//                             <span className='text-sm'>
//                                 لورم ایپسوم متن ساختگی با تولید سادگی صنعت چاپ است.
//                             </span>
//                         </div>
//                         <div className='flex gap-4'>
//                             <div className='w-[70px] h-[70px] rounded-[15px] flex items-center justify-center bg-amber-400 text-sm'>
//                                 مجوز
//                             </div>
//                             <div className='w-[70px] h-[70px] rounded-[15px] flex items-center justify-center bg-amber-400 text-sm'>
//                                 مجوز
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* بخش پایین */}
//             <div className='flex flex-col sm:flex-row sm:justify-between gap-6 text-sm'>
//                 <div>
//                     <div className='flex items-center gap-2 text-base'>
//                         <FaLocationDot />
//                         <span>آدرس ما:</span>
//                     </div>
//                     <p>تهران، ولیعصر، کوچه طراحان سایت، پلاک 15، طبقه 2</p>
//                 </div>

//                 <div>
//                     <div className='flex items-center gap-2 text-base'>
//                         <FaPhone />
//                         <span>شماره تماس:</span>
//                     </div>
//                     <p>021-12345678</p>
//                 </div>
//             </div>

//             {/* متن کپی‌رایت */}
//             <div className='text-center pt-6 border-t border-gray-300 text-xs sm:text-sm'>
//                 تمامی حقوق متعلق به سایت فروشگاه صنایع دستی می‌باشد.
//             </div>
//         </div>
//     )
// }

import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { footer } from '../lib/const';

export default function Footer() {
  const items = footer;

  return (
    
    <div className="bg-green-300 rounded-[25px] p-6 sm:p-8 lg:p-[25px] flex flex-col gap-8 custom-container">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row-reverse justify-between gap-8 border-b-4 border-indigo-500 pb-6">

        {/* Menus */}
        <div className="flex flex-wrap gap-8 justify-start lg:justify-end w-full lg:w-auto">
          {items.map((item, idx) => (
            <div key={idx} className="min-w-[140px] text-sm flex flex-col gap-4">
              <h2 className="text-base font-semibold">{item.title}</h2>
              <ul className="flex flex-col gap-2">
                {item.subtitle.map((link, i) => (
                  <li key={i} className="hover:text-green-900 cursor-pointer transition-colors">
                    {link.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Store Description */}
        <div className="text-sm w-full lg:max-w-[567px] flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <img 
              className="w-12 h-12 sm:w-[55px] sm:h-[55px]" 
              src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/footer-logo.svg" 
              alt="فروشگاه صنایع دستی" 
            />
            <span className="text-lg sm:text-xl font-semibold">فروشگاه صنایع دستی</span>
          </div>

          <p className="leading-relaxed text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-12">
            <div className="flex flex-col gap-2 max-w-[320px]">
              <h3 className="text-base font-semibold">نماد اعتماد الکترونیک</h3>
              <span className="text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی صنعت چاپ است.
              </span>
            </div>

            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] rounded-[15px] flex items-center justify-center bg-amber-400 text-sm font-semibold select-none">
                مجوز
              </div>
              <div className="w-[70px] h-[70px] rounded-[15px] flex items-center justify-center bg-amber-400 text-sm font-semibold select-none">
                مجوز
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 text-sm text-gray-800">
        <div>
          <div className="flex items-center gap-2 text-base font-semibold">
            <FaLocationDot />
            <span>آدرس ما:</span>
          </div>
          <p>تهران، ولیعصر، کوچه طراحان سایت، پلاک 15، طبقه 2</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-base font-semibold">
            <FaPhone />
            <span>شماره تماس:</span>
          </div>
          <p>021-12345678</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-6 border-t border-gray-300 text-xs sm:text-sm text-gray-700">
        تمامی حقوق متعلق به سایت فروشگاه صنایع دستی می‌باشد.
      </div>
    </div>
  );
}
