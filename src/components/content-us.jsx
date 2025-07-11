import React from 'react'
import Header from './Header'
import Form from './form';
import Location from './location';
import Footer from './Footer';
import { FaTelegramPlane } from "react-icons/fa";
import NewHeader from './NewHeader';
export default function ContentUS() {
    return (
        <>
            <div dir='rtl' className='custom-container mx-auto font-yekan'>
                {/* <Header /> */}
                <NewHeader />
                <div className='flex  flex-wrap justify-center lg:justify-between gap-3 w-full'>
                    {[
                        { title: 'نشانی', desc: 'تهران، ولیعصر، کوچه طراحان سایت، پلاک 15، طبقه2' },
                        { title: 'شماره های تماس', desc: '021-12345678 | 0912-1234567' },
                        { title: 'پست الکترونیک', desc: 'info@example.com' },
                        { title: 'شبکه های اجتماعی', desc: '' }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className='w-full sm:w-[calc(50%-0.75rem)] lg:w-[309px] p-4 rounded-2xl flex flex-col gap-4 bg-[#F9F9F9]'
                        >
                            <div className='flex items-center  gap-2'>
                                <div className='w-12 h-12 rounded-2xl flex items-center justify-center bg-amber-50'>
                                    <img
                                        className='w-8 h-8'
                                        src='https://presite.ir/Handicrafts/wp-content/uploads/2023/07/footer-logo.svg'
                                        alt=''
                                    />
                                </div>
                                <span className='text-green-600 text-xl'>
                                    {item.title}
                                </span>
                            </div>
                            <div className='text-center text-sm leading-relaxed'>
                                {item.title === 'شبکه های اجتماعی' ? (
                                    <div className='flex justify-center gap-2'>
                                        {/* Social icons */}
                                        <div className='w-[32px] flex items-center justify-center bg-amber-300 rounded-[9px] h-[32px]'>
                                            <FaTelegramPlane />
                                        </div>
                                        <div className='w-[32px] flex items-center justify-center bg-amber-300 rounded-[9px] h-[32px]'>
                                            <FaTelegramPlane />
                                        </div>
                                        <div className='w-[32px] flex items-center justify-center bg-amber-300 rounded-[9px] h-[32px]'>
                                            <FaTelegramPlane />
                                        </div>
                                        <div className='w-[32px] flex items-center justify-center bg-amber-300 rounded-[9px] h-[32px]'>
                                            <FaTelegramPlane />
                                        </div>
                                    </div>
                                ) : (
                                    <span>{item.desc}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full py-[5.5rem] justify-center flex '>
                    <div className='flex  items-center'>
                        <Form />
                        <Location />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
