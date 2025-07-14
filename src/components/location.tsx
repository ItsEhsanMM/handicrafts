// import React from 'react'

// export default function Location() {
//     return (
//         <>
//             <div className='w-[914px] h-[278px] flex items-center flex-col justify-center '>
//                 <div className='w-full flex justify-end'>
//                     <span className='text-right w-full text-[16px]  pb-[0.5rem] text-zinc-400 '>
//                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپـگرها و متون بلـکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
//                     </span>
//                 </div>

//                 <div className='relative flex justify-center '>
//                     <img className='w-[100%] h-[100%] rounded-l-2xl' src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/map.png" alt="location" />
//                     <div className='absolute flex flex-col text-[14px] p-[0.5rem] w-[211px] h-[78px] rounded-2xl bg-[#fcd1429b] bottom-[35px]'>
//                         <span className='text-[#ffff]'>ما اینجابم</span>
//                         <span>یزد، شهر مهربانان، کوچه طراحان سایت، پلاک 15، طبقه2</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


import React from 'react'

export default function Location() {
    return (
        <div className='w-full max-w-[914px] mx-auto flex flex-col justify-center items-center'>
            <div className='w-full flex justify-end px-4 sm:px-0'>
                <span className='text-right w-full text-[16px] pb-[0.5rem] text-zinc-400 max-w-[600px]'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپـگرها و متون بلـکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </span>
            </div>

            <div className='relative w-full pt-[30%] sm:pt-[25%] md:pt-[20%] min-h-[300px] rounded-l-2xl overflow-hidden'>
                {/* pt-[30%] for aspect ratio: height ~30% of width */}
                <img
                    className='absolute top-0 left-0 w-full h-full object-cover rounded-l-2xl'
                    src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/map.png"
                    alt="location"
                />
                <div className='absolute bottom-[5%] left-[5%] sm:bottom-[10%] sm:left-[10%] flex flex-col text-[14px] p-2 w-[70%] sm:w-[50%] md:w-[40%] rounded-2xl bg-[#fcd1429b]'>
                    <span className='text-white font-semibold'>ما اینجابم</span>
                    <span>یزد، شهر مهربانان، کوچه طراحان سایت، پلاک 15، طبقه2</span>
                </div>
            </div>
        </div>
    )
}
