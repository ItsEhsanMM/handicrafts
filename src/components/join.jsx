import React from 'react'

export default function join() {
    return (
        <>
            <div className='bg-amber-600 relative flex flex-col items-center justify-center w-[100%]  rounded-[25px] custom-container'>
                <img className='w-[100%] bg-[#ffffff60] h-[100%]' src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/home-bg-img4-1.png" alt="" />
                <div className='absolute flex items-center flex-col justify-center'>
                    <div className='flex flex-col items-center justify-center gap-[.5rem] py-[1.5rem]'>
                        <span className='text-[25px]'>
                            عضویت در خبرنامه سایت
                        </span>
                        <span className='text-[20px]'>
                            با عضویت در خبرنامه سایت صنایع دستی، از جدیدترین اخبار و مقالات ما اطلاع یابید.
                        </span>
                    </div>
                    <div className='bg-[#F9F9F9] w-[391px] max-h-[51px] rounded-[15px] p-[3px] relative '>
                        <input type="text" placeholder='ادرس ابمیل خود را وارد کنید ....' className=' pr-[0.5rem] max-w-[200px] h-[50px] border-[none] outline-none' />
                        <div className='w-[45px] h-[45px] bg-amber-400 rounded-[12px] flex items-center justify-center absolute top-[2.5px] left-[3px]'>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
