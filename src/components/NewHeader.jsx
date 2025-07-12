// import React from 'react'
// import { Link } from 'react-router';
// import { CiHome } from "react-icons/ci";
// import { linkHeader } from '../lib/const';
// import { CiUser } from "react-icons/ci";
// export default function NewHeader() {
//     let links = linkHeader
//     return (
//         <>  <div className='pb-[4.5rem]'>

//             <div className='custom-container min-h-[80px] border-b-2  flex items-center justify-between'>
//                 <div className='flex  gap-[1.5rem] max-w-[823px]'>
//                     <img src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/Logo.svg" alt="" />
//                     <div className='flex h-[80px]'>
//                         <div className='flex gap-[0.75rem]  items-center h-[%100]'>
//                             {links.map(num => (
//                                 <Link to={num.linkTo}>
//                                     <div className='flex gap-[0.25rem]'>
//                                         <CiHome />
//                                         <span>
//                                         {
//                                             num.title
//                                         }
//                                         </span>
//                                     </div>
//                                 </Link>
//                             ))
//                             }

//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex gap-[0.75rem]'>
//                     <input className='h-[49px] w-[303px] rounded-2xl bg-zinc-700' type="text" name="" id="" />
//                     <div className='flex gap-[0.5rem]'>
//                         <div className='w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300'>
//                             <CiUser />
//                         </div>
//                         <div className='w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300'>
//                             <CiUser />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// import React from 'react';
// import { Link } from 'react-router'; // ✅ Corrected import
// import { CiHome, CiUser } from "react-icons/ci";
// import { linkHeader } from '../lib/const';

// export default function NewHeader() {
//     return (
//         <header className="pb-[4.5rem]">
//             <nav className="custom-container min-h-[80px] border-b-2 flex flex-wrap items-center justify-between py-2" aria-label="ناوبری اصلی">
//                 {/* ✅ Logo & Navigation Links */}
//                 <div className="flex flex-wrap items-center gap-[1.5rem] max-w-full">
//                     <Link to="/" aria-label="خانه">
//                         <img
//                             src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/Logo.svg"
//                             alt="لوگوی فروشگاه صنایع دستی"
//                             className="w-auto h-12"
//                         />
//                     </Link>

//                     <div className="flex gap-[0.75rem] items-center flex-wrap">
//                         {linkHeader.map((item, index) => (
//                             <Link to={item.linkTo} key={index} className="flex gap-1 items-center text-gray-800 hover:text-yellow-600 transition-all duration-200">
//                                 <CiHome />
//                                 <span>{item.title}</span>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 {/* ✅ Search + Profile (Responsive) */}
//                 <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
//                     <input
//                         type="text"
//                         placeholder="جستجو..."
//                         className="h-[49px] w-[200px] md:w-[303px] rounded-2xl bg-zinc-700 text-white px-4 placeholder-white text-sm"
//                         aria-label="جستجو"
//                     />
//                     <div className="flex gap-2">
//                         <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="پروفایل">
//                             <CiUser size={24} />
//                         </div>
//                         <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="ورود / ثبت‌نام">
//                             <CiUser size={24} />
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


// import React from 'react';
// import { Link, useLocation } from 'react-router'; // ✅ useLocation added
// import { CiHome, CiUser } from "react-icons/ci";
// import { linkHeader } from '../lib/const';

// export default function NewHeader() {
//     const location = useLocation(); // ✅ current path

//     return (
//         <header className="pb-[4.5rem]">
//             <nav className="custom-container min-h-[80px] border-b-2 flex flex-wrap items-center justify-between py-2" aria-label="ناوبری اصلی">
//                 {/* ✅ Logo & Navigation Links */}
//                 <div className="flex flex-wrap items-center gap-[1.5rem] max-w-full">
//                     <Link to="/" aria-label="خانه">
//                         <img
//                             src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/Logo.svg"
//                             alt="لوگوی فروشگاه صنایع دستی"
//                             className="w-auto h-12"
//                         />
//                     </Link>

//                     <div className="flex gap-[0.75rem] items-center flex-wrap">
//                         {linkHeader.map((item, index) => {
//                             const isActive = location.pathname === item.linkTo;
//                             return (
//                                 <Link
//                                     to={item.linkTo}
//                                     key={index}
//                                     className={`flex gap-1 items-center transition-all duration-200 ${
//                                         isActive ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-yellow-600'
//                                     }`}
//                                 >
//                                     <CiHome />
//                                     <span>{item.title}</span>
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* ✅ Search + Profile */}
//                 <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
//                     <input
//                         type="text"
//                         placeholder="جستجو..."
//                         className="h-[49px] w-[200px] md:w-[303px] rounded-2xl bg-zinc-700 text-white px-4 placeholder-white text-sm"
//                         aria-label="جستجو"
//                     />
//                     <div className="flex gap-2">
//                         <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="پروفایل">
//                             <CiUser size={24} />
//                         </div>
//                         <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="ورود / ثبت‌نام">
//                             <CiUser size={24} />
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


// import React from 'react';
// import { Link, useLocation } from 'react-router'; // use react-router-dom
// import { CiHome, CiUser } from "react-icons/ci";
// import { linkHeader } from '../lib/const';

// export default function NewHeader() {
//     const location = useLocation();

//     return (
//         <header className="pb-[4.5rem]">
//             <nav className="custom-container min-h-[80px] border-b-2 flex flex-wrap items-center justify-between py-2" aria-label="ناوبری اصلی">
//                 {/* Logo & Links */}
//                 <div className="flex flex-wrap items-center gap-6 max-w-full">
//                     <Link to="/" aria-label="خانه">
//                         <img
//                             src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/Logo.svg"
//                             alt="لوگوی صنایع دستی"
//                             className="h-12"
//                         />
//                     </Link>

//                     <div className="flex gap-4 items-center flex-wrap text-sm md:text-base">
//                         {linkHeader.map((item, index) => {
//                             const isActive = location.pathname === item.linkTo;
//                             return (
//                                 <Link
//                                     key={index}
//                                     to={item.linkTo}
//                                     className={`flex items-center gap-1 transition-all duration-200 ${
//                                         isActive
//                                             ? 'text-blue-600 font-bold'
//                                             : 'text-gray-700 hover:text-yellow-600'
//                                     }`}
//                                     aria-current={isActive ? 'page' : undefined}
//                                 >
//                                     <CiHome />
//                                     <span>{item.title}</span>
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Search + Profile */}
//                 <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
//                     <input
//                         type="text"
//                         placeholder="جستجو..."
//                         className="h-[49px] w-[200px] md:w-[303px] rounded-2xl bg-zinc-700 text-white px-4 placeholder-white text-sm"
//                         aria-label="جستجو"
//                     />
//                     <div className="flex gap-2">
//                         <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="پروفایل">
//                             <CiUser size={22} />
//                         </div>
//                         <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="ورود">
//                             <CiUser size={22} />
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

import React from 'react';
import { Link, useLocation } from 'react-router';
import { CiHome, CiUser } from "react-icons/ci";
import { linkHeader } from '../lib/const';

export default function NewHeader() {
    const location = useLocation();

    return (
        <header className="pb-[4.5rem]">
            <nav className="custom-container min-h-[80px] border-b-2 flex flex-wrap items-center justify-between py-2" aria-label="ناوبری اصلی">
                <div className="flex flex-wrap items-center gap-6 max-w-full">
                    <Link to="/" aria-label="خانه">
                        <img
                            src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/Logo.svg"
                            alt="لوگوی صنایع دستی"
                            className="h-12"
                        />
                    </Link>

                    <div className="flex gap-4 items-center flex-wrap text-sm md:text-base">
                        {linkHeader.map((item, index) => {
                            const isActive = location.pathname === item.linkTo || location.pathname.startsWith(item.linkTo + '/') || location.pathname.startsWith(item.linkTo + '/shop') || location.pathname.startsWith(item.linkTo + '/about') || location.pathname.startsWith(item.linkTo + '/content');
                            return (
                                <Link
                                    key={index}
                                    to={item.linkTo}
                                    className={`flex items-center gap-1 transition-all duration-200 ${
                                        isActive
                                            ? 'text-blue-600 font-bold'
                                            : 'text-gray-700 hover:text-yellow-600'
                                    }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <CiHome />
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="جستجو..."
                        className="h-[49px] w-[200px] md:w-[303px] rounded-2xl bg-zinc-700 text-white px-4 placeholder-white text-sm"
                        aria-label="جستجو"
                    />
                    <div className="flex gap-2">
                        <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="پروفایل">
                            <CiUser size={22} />
                        </div>
                        <div className="w-[49px] h-[49px] rounded-[8px] flex items-center justify-center bg-amber-300" aria-label="ورود">
                            <CiUser size={22} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
