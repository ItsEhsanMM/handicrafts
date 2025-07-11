// import React from 'react'

// export default function Ghaly() {
//     return (
//         <div className='custom-container'>
//             <div className='min-h-[450px] flex items-center'>
//                 <div className='w-full bg-[#F9F9F9] rounded-3xl p-6 sm:p-[25px] relative flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between'>

//                     {/* متن و دکمه */}
//                     <div className='flex flex-col gap-6 sm:gap-[1.5rem] text-center sm:text-right z-10'>
//                         <span className='text-xl sm:text-[25px] font-semibold leading-loose'>
//                             با قالی دستباف ایــرانی، هنر اصیل ایرانی را مهمان خانه خود کنید.
//                         </span>

//                         <div className='flex flex-col sm:flex-row gap-4 sm:gap-[2.5rem] items-center sm:items-center justify-center sm:justify-start'>
//                             <span className='text-lg sm:text-[35px] text-green-700 font-bold'>
//                                 همین حالا خرید کنید...
//                             </span>
//                             <div className='w-full sm:w-[157px] h-[42px] rounded-[14px] flex items-center justify-center bg-amber-300 px-4'>
//                                 <span className='text-sm sm:text-base font-medium'>
//                                     مشاهده فروشگاه
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* تصویر */}
//                     <div className='mb-4 sm:mb-0 sm:absolute sm:left-0 sm:top-[-103px] w-[150px] sm:w-auto'>
//                         <img
//                             className='w-full h-auto'
//                             src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/carpet-main-img-1.png"
//                             alt="carpet"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react';

export default function Ghaly() {
    return (
        <div className='custom-container px-4'>
            <div className='min-h-[450px] flex items-center'>
                <div className='w-full bg-[#F9F9F9] rounded-3xl p-6 sm:p-[25px] relative flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between'>

                    {/* متن و دکمه */}
                    <div className='flex flex-col gap-6 sm:gap-[1.5rem] text-center lg:text-right z-10 max-w-full lg:max-w-[60%]'>
                        <span className='text-xl sm:text-[25px] font-semibold leading-loose'>
                            با قالی دستباف ایــرانی، هنر اصیل ایرانی را مهمان خانه خود کنید.
                        </span>

                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[2.5rem] items-center justify-center lg:justify-start'>
                            <span className='text-lg sm:text-[28px] md:text-[32px] lg:text-[35px] text-green-700 font-bold'>
                                همین حالا خرید کنید...
                            </span>
                            <div className='w-full sm:w-[157px] h-[42px] rounded-[14px] flex items-center justify-center bg-amber-300 px-4'>
                                <span className='text-sm sm:text-base font-medium'>
                                    مشاهده فروشگاه
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* تصویر */}
                    <div className='mb-4 lg:mb-0 lg:absolute lg:left-0 lg:top-[-100px] w-[150px] sm:w-[200px] md:w-[230px] lg:w-[280px] xl:w-[320px]'>
                        <img
                            className='w-full h-auto'
                            src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/carpet-main-img-1.png"
                            alt="carpet"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
