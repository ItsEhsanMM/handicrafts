// import React from 'react'

// export default function join() {
//     return (
//         <>
//             <div className='bg-amber-600 relative flex flex-col items-center justify-center w-[100%]  rounded-[25px] custom-container'>
//                 <img className='w-[100%] bg-[#ffffff60] h-[100%]' src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/home-bg-img4-1.png" alt="" />
//                 <div className='absolute flex items-center flex-col justify-center'>
//                     <div className='flex flex-col items-center justify-center gap-[.5rem] py-[1.5rem]'>
//                         <span className='text-[25px]'>
//                             عضویت در خبرنامه سایت
//                         </span>
//                         <span className='text-[20px]'>
//                             با عضویت در خبرنامه سایت صنایع دستی، از جدیدترین اخبار و مقالات ما اطلاع یابید.
//                         </span>
//                     </div>
//                     <div className='bg-[#F9F9F9] w-[391px] max-h-[51px] rounded-[15px] p-[3px] relative '>
//                         <input type="text" placeholder='ادرس ابمیل خود را وارد کنید ....' className=' pr-[0.5rem] max-w-[200px] h-[50px] border-[none] outline-none' />
//                         <div className='w-[45px] h-[45px] bg-amber-400 rounded-[12px] flex items-center justify-center absolute top-[2.5px] left-[3px]'>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }
import React from 'react';

export default function Join() {
    return (
        <div className="relative w-full rounded-[25px] custom-container overflow-hidden my-10">
            {/* Background image */}
            <img
                src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/home-bg-img4-1.png"
                alt="newsletter background"
                className="w-full h-full object-cover min-h-[190px]"
            />

            {/* Gray gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0000009c] to-transparent z-0" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 sm:py-12 z-10 text-center text-white">
                <div className="max-w-xl flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold">عضویت در خبرنامه سایت</h2>
                    <p className="text-base sm:text-lg">
                        با عضویت در خبرنامه سایت صنایع دستی، از جدیدترین اخبار و مقالات ما اطلاع یابید.
                    </p>
                </div>

                {/* Input Box */}
                <div className="bg-[#F9F9F9] rounded-[15px] flex items-center mt-6 w-full max-w-md px-3 py-1.5 shadow-lg">
                    <input
                        type="email"
                        placeholder="آدرس ایمیل خود را وارد کنید..."
                        className="flex-grow h-[45px] px-3 rounded-[10px] text-zinc-700 text-sm sm:text-base outline-none border-none"
                    />
                    <button className="w-[45px] h-[45px] bg-amber-400 rounded-[12px] flex items-center justify-center ml-2">
                        📩
                    </button>
                </div>
            </div>
        </div>
    );
}
