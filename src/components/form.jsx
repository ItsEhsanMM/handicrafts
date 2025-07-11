import React from 'react'

export default function Form() {
    return (
        <>
            <div dir='rtl' className='w-[394px] flex flex-col gap-[0.5rem]  rounded-2xl p-[1.5rem] bg-[#fff] shadow-2xl'>
                <span>
                    ارسال پیام به ما
                </span>
                <input className='h-[41px] w-[353px] bg-[#F9F9F9] pr-[9px] rounded-[12px]' type="text" placeholder='name' />
                <input className='h-[41px] w-[353px] bg-[#F9F9F9] pr-[9px] rounded-[12px]' type="text" placeholder='name' />
                <input className='h-[41px] w-[353px] bg-[#F9F9F9] pr-[9px] rounded-[12px]' type="text" placeholder='name' />
                <label>
                    <textarea name="postContent" className='bg-[#F9F9F9] rounded-2xl w-[100%] min-h-[150px]' />
                </label>
                <div className='w-full flex justify-end'>
                    <button className='h-[42px] bg-green-500 w-[79px] rounded-[9px] flex items-center justify-center'>
                        <span>
                            ارسال
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}
