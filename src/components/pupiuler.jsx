import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Addto from './addto';
import Product from './product';
// Import Swiper styles
import 'swiper/css';
import { imgs } from '../lib/const';
import Title from './title';
export default function pupiuler() {
    const number = [1, 2, 3, 4, 5, 6, 7]
    const Ask = imgs[0].product
    return (
        <>
            <div className='relative'>
                <div className='flex flex-col gap-[1.5rem] py-[1.5rem] custom-container'>
                    <Title />
                    <div className='h-[450px] p-[55px] flex items-center justify-center relative rounded-[29px] '>
                        <div className='h-[323px] w-[100%] absolute bottom-0 rounded-[25px] bg-[#44E4D1] shadow-2xl'>

                        </div >
                        <div className='absolute w-[100%] top-[0]'>
                            <Swiper
                                className='w-[1200px]'
                                spaceBetween={20}
                                slidesPerView={4}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {
                                    Ask.map(image => (
                                        <SwiperSlide>
                                            <Product  {...image} />
                                        </SwiperSlide>

                                    ))
                                }
                            </Swiper>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
