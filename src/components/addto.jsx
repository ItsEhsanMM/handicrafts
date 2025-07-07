import React from 'react'
import Shop from "../assets/icons/shop.svg";

export default function addto() {
  return (
    <>
        <div className='flex items-center justify-between w-[65px] h-[23px] p-[2px] bg-[#bcdbc9] rounded-[4px]'>
            <span className='text-[10px]'>افزودن به</span>
            <img className='w-[12px] ' src={Shop} alt="" />
        </div>
    </>
  )
}
