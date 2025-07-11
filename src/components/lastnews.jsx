// import React from 'react'
// import Title from './title'
// import { imgs } from '../lib/const'
// const Ask = imgs[1].mobile
// export default function LassNews() {
//     const numbers = [1, 2, 3]
//     return (
//         <>
//             <div className='py-[1.5rem] custom-container'>
//                 <Title />
//                 <div className='flex flex-wrap  justify-between'>
//                     <div className='h-[392px] w-[638px] relative flex justify-center  bg-[#F9F9F9] rounded-2xl'>
//                         <img src={Ask[1].src} className='w-[100%] h-[100%] object-cover rounded-2xl' alt="" />
//                         <div className='max-w-[600px] min-h-[100px] p-[10px] flex flex-col justify-between absolute bottom-[15px] bg-[#F9F9F9]  rounded-2xl'>
//                             <div>
//                                 <span>
//                                     جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
//                                 </span>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <span className='text-[14px] w-[450px]'>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…</span>
//                                 <div className='w-[32px] h-[32px] flex items-center justify-center rounded-[9px] bg-green-800'>
//                                     <span className='text-[19px] text-[#ffff]'>
//                                         {">"}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex flex-col justify-between'>
//                         {
//                             Ask.map(images => (
//                                 <div className='max-w-[612px] min-h-[111px] p-[10px] rounded-2xl flex gap-[0.5rem] bg-[#F9F9F9]'>
//                                     <div className='w-[100px] h-[100px] rounded-[9px]'>
//                                         {/* ... */}
//                                         <img className='w-[100%] h-[100%] object-cover rounded-2xl' src={images.src} alt="" />
//                                     </div>

//                                     <div className='flex flex-col justify-between'>
//                                         <span className='text-[15px]'>
//                                             جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
//                                         </span>
//                                         <span className='text-[13px]'>
//                                             لورم ایپسوم متن ساختگی با تولید سادگی مفهوم از صنعت چاپ گرافیک است.
//                                         </span>
//                                         <div className='flex justify-between'>
//                                             <div>
//                                                 <span>یک دیدگاه</span>
//                                                 <span>16 مهر 1401</span>
//                                             </div>
//                                             <div className='w-[32px] h-[32px] flex items-center justify-center rounded-[9px] bg-green-800'>
//                                                 <span className='text-[19px] text-[#ffff]'>
//                                                     {">"}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>

//                             ))
//                         }
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }
import React from 'react';
import Title from './title';
import { imgs } from '../lib/const';

const Ask = imgs[1].mobile;

export default function LassNews() {
    return (
        <div className='py-6 custom-container'>
            <Title />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>

                {/* Main Large News Card */}
                <div className='relative bg-[#F9F9F9] rounded-2xl overflow-hidden'>
                    <img
                        src={Ask[1].src}
                        alt="خبر اصلی"
                        className='w-full h-[300px] sm:h-[392px] object-cover'
                    />
                    <div className='absolute bottom-4 left-4 right-4 bg-[#F9F9F9] bg-opacity-95 rounded-2xl p-4 shadow-md'>
                        <h3 className='font-semibold text-base sm:text-lg mb-2'>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
                        </h3>
                        <div className='flex justify-between items-center gap-4 flex-wrap'>
                            <p className='text-sm sm:text-[14px] flex-1'>
                                روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…
                            </p>
                            <div className='w-[32px] h-[32px] flex items-center justify-center rounded-[9px] bg-green-800 text-white'>
                                <span className='text-lg'>{'>'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side News Cards */}
                <div className='flex flex-col gap-4'>
                    {Ask.map((images, index) => (
                        <div
                            key={index}
                            className='bg-[#F9F9F9] rounded-2xl p-3 flex gap-3 items-start sm:items-center'
                        >
                            <div className='w-[90px] sm:w-[100px] h-[90px] sm:h-[100px] rounded-[9px] overflow-hidden flex-shrink-0'>
                                <img
                                    src={images.src}
                                    alt={`خبر ${index + 1}`}
                                    className='w-full h-full object-cover rounded-[9px]'
                                />
                            </div>

                            <div className='flex flex-col gap-1 flex-grow'>
                                <h4 className='text-sm sm:text-base font-medium'>
                                    جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
                                </h4>
                                <p className='text-xs sm:text-sm text-gray-700'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی مفهوم از صنعت چاپ گرافیک است.
                                </p>
                                <div className='flex justify-between items-center text-[12px] sm:text-sm'>
                                    <div className='flex gap-2 text-gray-500'>
                                        <span>یک دیدگاه</span>
                                        <span>16 مهر 1401</span>
                                    </div>
                                    <div className='w-[32px] h-[32px] flex items-center justify-center rounded-[9px] bg-green-800 text-white'>
                                        <span className='text-lg'>{'>'}</span>
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
