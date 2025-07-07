import React from 'react'
import Addto from './addto'
export default function Title() {
  return (
    <>
        <div className='h-[43px] w-[100%] flex-row-reverse py-[3.5rem] flex justify-between items-center' > 
                <div className='w-[129px] h-[40px] bg-[#F9F9F9] rounded-[8px] flex items-center justify-center'>
                    <span className='text-sky-600'>
                    مشاهده همه
                    </span>
                </div>
                <div>
                    <img src="http://www.w3.org/2000/svg" alt="" />
                    <span className='text-[22px]'>
                    جدیدترین محصولات ما
                    </span>
                </div>
        </div>
    </>
  )
}
