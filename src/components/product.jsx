import React from 'react'
import Addto from './addto'
export default function product(props) {
    return (
        <>
            <div className='w-[279px] p-[4.5px] flex flex-col justify-between rounded-[19px] shadow-2xl h-[379px] bg-[#ffff]'>
                <div className=' w-[100%] pt-[0.5rem] h-fit flex items-center   justify-center'>
                    <img className='w-[230px]' src={props.src} alt="" />
                </div>
                <div className='flex flex-col p-[12px] gap-[1.5rem]'>
                    <span className='text-[20px] text-zinc-600'>
                        {
                            props.name
                        }
                    </span>
                    <div className='flex items-center justify-between'>

                        <div className='flex flex-row-reverse gap-[0.25rem]'>
                            <span className='text-zinc-500'>تومان</span>
                            <span className='text-[14px]'>
                                {
                                    props.price
                                }
                            </span>

                        </div>
                        <Addto />
                    </div>
                </div>
            </div>
        </>
    )
}
