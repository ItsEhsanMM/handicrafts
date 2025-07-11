// import React from 'react'
// import Addto from './addto'
// import Title from './title'
// import Product from './product';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import { imgs } from '../lib/const';
// const Ask = imgs[0].product
// export default function Newproduct() {
//     const number = [1, 2, 3, 4, 5, 6, 7]
//     return (
//         <>

//             <div className='flex flex-col gap-[1.5rem] custom-container'>
//                 <Title />
//                 <div className='h-fit p-[55px] rounded-[29px] bg-[#44E4D1]'>
//                     <Swiper
//                         spaceBetween={20}
//                         slidesPerView={4}

//                         onSlideChange={() => console.log('slide change')}
//                         onSwiper={(swiper) => console.log(swiper)}
//                     >
//                         {
//                             Ask.map(image => (
//                                 <SwiperSlide>
//                                     <Product {...image} />
//                                 </SwiperSlide>

//                             ))
//                         }
//                     </Swiper>

//                 </div>
//             </div>
//         </>
//     )
// }

import React from 'react';
import Addto from './addto';
import Title from './title';
import Product from './product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { imgs } from '../lib/const';

const Ask = imgs[0].product;

export default function NewProduct() {
    return (
        <div className="flex flex-col gap-6 custom-container py-10">
            <Title />

            <div className="w-full bg-[#44E4D1] rounded-[29px] px-4 sm:px-6 lg:px-10 py-8">
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        480: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
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
    );
}
