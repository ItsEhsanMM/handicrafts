// import React from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Addto from './addto';
// import Product from './product';
// // Import Swiper styles
// import 'swiper/css';
// import { imgs } from '../lib/const';
// import Title from './title';
// export default function pupiuler() {
//     const number = [1, 2, 3, 4, 5, 6, 7]
//     const Ask = imgs[0].product
//     return (
//         <>
//             <div className='relative'>
//                 <div className='flex flex-col gap-[1.5rem] py-[1.5rem] custom-container'>
//                     <Title />
//                     <div className='h-[450px] p-[55px] flex items-center justify-center relative rounded-[29px] '>
//                         <div className='h-[323px] w-[100%] absolute bottom-0 rounded-[25px] bg-[#44E4D1] shadow-2xl'>

//                         </div >
//                         <div className='absolute w-[100%] top-[0]'>
//                             <Swiper
//                                 className='w-[1200px]'
//                                 spaceBetween={20}
//                                 slidesPerView={4}
//                                 breakpoints={{
//                                     0: {
//                                         slidesPerView: 1.2,
//                                     },
//                                     480: {
//                                         slidesPerView: 1.5,
//                                     },
//                                     640: {
//                                         slidesPerView: 2,
//                                     },
//                                     768: {
//                                         slidesPerView: 3,
//                                     },
//                                     1420: {
//                                         slidesPerView: 3,
//                                     },
//                                     1353: {
//                                         slidesPerView: 4,
//                                     },
//                                 }}
//                                 onSlideChange={() => console.log('slide change')}
//                                 onSwiper={(swiper) => console.log(swiper)}
//                             >
//                                 {
//                                     Ask.map(image => (
//                                         <SwiperSlide>
//                                             <Product  {...image} />
//                                         </SwiperSlide>

//                                     ))
//                                 }
//                             </Swiper>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Addto from './addto';
// import Product from './product';
// import { imgs } from '../lib/const';
// import Title from './title';

// export default function Popular() {
//     const Ask = imgs[0].product;

//     return (
//         <div className="relative w-full">
//             <div className="flex flex-col gap-6 py-6 custom-container">
//                 <Title />

//                 {/* باکس پس‌زمینه و اسلایدر */}
//                 <div className="w-full rounded-[29px] bg-[#44E4D1] shadow-2xl px-4 sm:px-6 py-10 flex flex-col items-center justify-center">
//                     <div className="w-full max-w-screen-xl">
//                         <Swiper
//                             spaceBetween={20}
//                             breakpoints={{
//                                 0: { slidesPerView: 1.2 },
//                                 480: { slidesPerView: 1.5 },
//                                 640: { slidesPerView: 2 },
//                                 768: { slidesPerView: 3 },
//                                 1024: { slidesPerView: 4 },
//                             }}
//                             onSlideChange={() => console.log('slide change')}
//                             onSwiper={(swiper) => console.log(swiper)}
//                         >
//                             {Ask.map((image, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Product {...image} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Addto from './addto';
// import Product from './product';
// import { imgs } from '../lib/const';
// import Title from './title';

// export default function Popular() {
//     const Ask = imgs[0].product;

//     return (
//         <div className="relative w-full">
//             <div className="flex flex-col gap-6 py-6 custom-container">
//                 <Title />

//                 {/* Container with background */}
//                 <div className="relative w-full flex justify-center items-center px-4 sm:px-6 pt-10 pb-6 rounded-[29px] overflow-visible">

//                     {/* Blue background only at the bottom */}
//                     <div className="absolute bottom-0 w-full h-[340px] bg-[#44E4D1] rounded-[29px] z-0" />

//                     {/* Swiper content above it */}
//                     <div className="w-full max-w-screen-xl z-10">
//                         <Swiper
//                             spaceBetween={20}
//                             breakpoints={{
//                                 0: { slidesPerView: 1.2 },
//                                 480: { slidesPerView: 1.5 },
//                                 640: { slidesPerView: 2 },
//                                 768: { slidesPerView: 3 },
//                                 1024: { slidesPerView: 4 },
//                             }}
//                             onSlideChange={() => console.log('slide change')}
//                             onSwiper={(swiper) => console.log(swiper)}
//                         >
//                             {Ask.map((image, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Product {...image} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Addto from './addto';
// import Product from './product';
// import { imgs } from '../lib/const';
// import Title from './title';

// export default function Popular() {
//     const Ask = imgs[0].product;

//     return (
//         // 🟨 Full-width yellow background wrapper
//         <div className="w-full bg-amber-200 py-12">
//             {/* Container inside yellow */}
//             <div className="flex flex-col gap-6 custom-container">
//                 <Title />

//                 {/* Blue section + Swiper */}
//                 <div className="relative w-full flex justify-center items-center px-4 sm:px-6 pt-10 pb-6 rounded-[29px] overflow-visible">
                    
//                     {/* 🟦 Blue background at the bottom */}
//                     <div className="absolute bottom-0 w-full h-[200px] bg-[#44E4D1] rounded-b-[29px] z-0" />

//                     {/* 🔳 Swiper content */}
//                     <div className="w-full max-w-screen-xl z-10">
//                         <Swiper
//                             spaceBetween={20}
//                             breakpoints={{
//                                 0: { slidesPerView: 1.2 },
//                                 480: { slidesPerView: 1.5 },
//                                 640: { slidesPerView: 2 },
//                                 768: { slidesPerView: 3 },
//                                 1024: { slidesPerView: 4 },
//                             }}
//                             onSlideChange={() => console.log('slide change')}
//                             onSwiper={(swiper) => console.log(swiper)}
//                         >
//                             {Ask.map((image, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Product {...image} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Addto from './addto';
import Product from './product';
import { imgs } from '../lib/const';
import Title from './title';

export default function Popular() {
    const Ask = imgs[0].product;

    return (
        // 🧱 Wrapper relative to control background layers
        <div className="relative w-full">
            
            {/* 🟨 Half-height Yellow Background */}
            <div className="absolute bottom-0 left-0 rounded-t-[29px] w-full h-1/2 bg-[#FFCF2F] z-0" />

            {/* 🔳 Foreground content */}
            <div className="flex flex-col gap-6 py-12 custom-container relative z-10">
                <Title />

                {/* Blue Section + Slider */}
                <div className="relative w-full flex justify-center items-center px-4 sm:px-6 pt-10 pb-6 rounded-[29px] overflow-visible">
                    
                    {/* 🟦 Blue bottom background */}
                    <div className="absolute bottom-0 w-full h-[320px] bg-[#44E4D1] rounded-[29px] z-0" />

                    {/* Swiper */}
                    <div className="w-full max-w-screen-xl z-10">
                        <Swiper
                            spaceBetween={20}
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                480: { slidesPerView: 1.5 },
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {Ask.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Product {...image} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
