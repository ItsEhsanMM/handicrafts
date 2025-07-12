import React from 'react';
import { useParams, Link } from 'react-router';
import { imgs } from '../lib/const';
import NewHeader from './NewHeader';
import Footer from './Footer';
import NewProduct from './newproduct';
import Addto from './addto';
const products = imgs[0].product;
// import { Link } from 'react-router';
export default function ProductDetail() {
    let obj = [
        {
            id: 1,
            title: ' ارسال توسط فروشگاه'
        },
        {
            id: 1,
            title: 'گارانتی اصالت و سلامت فیزیکی کالا'
        },
        {
            id: 1,
            title: 'ضمانت تعویض کالا'
        },
        {
            id: 1,
            title: 'هزینه حمل به عهده خریدار'
        }
    ]
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <p className="text-center mt-20">محصول یافت نشد ❌</p>;

    return (
        <>
            <div dir='rtl' className='custom-container font-yekan'>
                <header>
                    <NewHeader />
                </header>
                <main>
                    <div className='h-[51px] bg-[#00A693] rounded-[12px] flex items-center p-[1.5rem]'>
                        <div className='flex gap-[0.5rem]'>
                            <Link to="/" >
                                خانه
                            </Link>
                            <span>
                                /
                            </span>
                            <Link to="/shop">
                                صنایع دستی چوبی
                            </Link>
                            <span>
                                /
                            </span>
                            <span>
                                {
                                    product.name
                                }
                            </span>
                        </div>

                        {/* <span>
                          /  / {product.name} 
                        </span> */}
                    </div>
                    <div className='flex justify-between items-center py-[3.5rem]'>
                        <div className='flex items-center justify-center w-[100%]'>
                            <img src={product.src} alt={product.name} className="w-[340px] mb-4" />
                        </div>
                        <div className='h-[406px] flex flex-row-reverse rounded-2xl bg-[#F9F9F9] p-[1.5rem]'>
                            <div className='h-[350px] flex flex-col gap-[1.5rem] w-[360px] bg-[#F4F4F4] rounded-2xl p-[1.5rem]'>
                                <div className='h-[55px] border-b-2'>
                                    <span>
                                        طراح سایت
                                    </span>
                                </div>
                                <div className='flex flex-col gap-[1rem]'>
                                    {obj.map(item => (
                                        <span>
                                            {
                                                item.title
                                            }
                                        </span>
                                    ))

                                    }
                                </div>
                                <div>
                                    <div className='flex justify-between h-[50px] items-center '>
                                        {
                                            product.price
                                        }
                                        <Addto />
                                    </div>
                                    <button className='w-[100%] h-[35px] rounded-[9px] text-[#ffff] flex items-center justify-center bg-[#00A693]'>
                                        افزودن به سبدخرید
                                    </button>
                                </div>
                            </div>
                            <div className='min-h-[342px] w-[497px] p-[1.5rem]'>
                                <div className='border-b-2'>
                                    <span>
                                        {
                                            product.name
                                        }
                                    </span>
                                </div>

                                <div>

                                </div>
                                <div className='pt-[1.5rem] flex gap-[0.5rem] flex-col'>
                                    <span>
                                        توضیحات محصول
                                    </span>
                                    <div className='flex  flex-col gap-[1.5rem] '>
                                        {
                                            obj.map(item => (
                                                <div className='flex gap-[0.5rem]'>
                                                    <span> . </span>
                                                    <span>{item.title}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%]   min-h-[777px] rounded-2xl p-[2.5rem] bg-[#F9F9F9]'>
                        <div className='h-[50px] border-b-2 items-center '>
                            <div className='flex gap-[1.5rem] items-center '>
                                <span className='cursor-pointer'>
                                    توضیحات
                                </span>
                                <span className='cursor-pointer'>
                                    نظرات (0)
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[2.5rem] items-center h-[100%] pt-[1.5rem] text-zinc-600'>
                            <span className='text-wrap text-justify '>
                                توضیحات
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                            </span>
                            <span>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.


                            </span>
                        </div>
                    </div>
                    <div>
                        <NewProduct />
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>

            </div>
        </>

    );
}
