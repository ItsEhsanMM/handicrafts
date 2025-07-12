import React from 'react'
import NewHeader from './NewHeader'
import Footer from './Footer'
export default function Ozviyat() {
    return (
        <>
            <div dir='rtl' className='font-yekan custom-container'>
                <header>
                    <NewHeader />
                </header>
                <main>
                    <div className='flex justify-between py-[2.5rem]'>
                        <div className='flex flex-col gap-[1.5rem]'>
                            <span className='text-[16px]'>
                                عضویت
                            </span>
                            <div className='w-[624px] gap-[0.5rem]  flex flex-col rounded-[19px] p-[20px] bg-[#F8F8F8]'>

                                <div className='flex flex-col h-fit  gap-[.5rem] '>

                                    <div className=' w-full flex flex-col gap-[0.75rem] '>
                                        <span>نام کاربری <span className='text-red-600'>*</span></span>
                                        <input className='w-[100%] bg-[#FFFFFF] min-h-[43px]  rounded-[9px]' type="text" />
                                    </div>
                                    <div className=' w-full flex flex-col gap-[1rem] '>
                                        <span>نام کاربری <span className='text-red-600'>*</span></span>
                                        <input className='w-[100%] bg-[#FFFFFF] min-h-[43px]  rounded-[9px]' type="text" />
                                    </div>
                                    <div className=' w-full flex flex-col gap-[1rem] '>
                                        <span>نام کاربری <span className='text-red-600'>*</span></span>
                                        <input className='w-[100%] bg-[#FFFFFF] min-h-[43px]  rounded-[9px]' type="text" />
                                    </div>

                                </div>

                                <div className='flex h-fit flex-col gap-[1rem]'>
                                    <span className='cursor-pointer text-zinc-500'>
                                        اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که <span className='hover:text-green-500'>در سیاست حفظ حریم خصوصی</span> توضیح داده شده است.
                                    </span>
                                    <button className='text-[#ffff] w-[111px] bg-[#00A693] flex items-center justify-center h-[40px] rounded-[9px]'>
                                        عضویت
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1.5rem]'>
                            <span className='text-[16px]'>
                                ورود
                            </span>
                            <div className='w-[624px] gap-[0.5rem]  flex flex-col rounded-[19px] p-[20px] bg-[#F8F8F8]'>

                                <div className='flex flex-col h-fit  gap-[.5rem] '>

                                    <div className=' w-full flex flex-col gap-[0.75rem] '>
                                        <span>نام کاربری <span className='text-red-600'>*</span></span>
                                        <input className='w-[100%] bg-[#FFFFFF] min-h-[43px]  rounded-[9px]' type="text" />
                                    </div>
                                    <div className=' w-full flex flex-col gap-[1rem] '>
                                        <span>نام کاربری <span className='text-red-600'>*</span></span>
                                        <input className='w-[100%] bg-[#FFFFFF] min-h-[43px]  rounded-[9px]' type="text" />
                                    </div>

                                </div>

                                <div className='flex h-fit flex-col gap-[1rem]'>
                                    <div>
                                        <div className='flex items-center gap-[1.5rem] py-[1.5rem]'>
                                            <button className='text-[#ffff] w-[111px] bg-[#00A693] flex items-center justify-center h-[40px] rounded-[9px]'>
                                                ورود
                                            </button>
                                            <div className='flex gap-[0.5rem]'>
                                                <input type="checkbox" name="" id="" />
                                                <span className='cursor-pointer text-zinc-500'>
                                                    مرا به خاطر بسپار
                                                </span>
                                            </div>

                                        </div>
                                        <div>
                                            <span className='cursor-pointer text-zinc-500'>گذرواژه خود را فراموش کرده اید؟</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>


        </>
    )
}
