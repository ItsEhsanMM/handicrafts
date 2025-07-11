// import React from 'react';
// import CommentPepole from './comment-pepole';
// import NewHeader from './NewHeader';
// import Footer from './Footer';
// import LassNews from './lastnews';
// function About() {
//     let a = 0
//     while(0 < 3000){
//         setInterval(() => {
//             a++
//         }, 0.5);
//     }
//     let test = [1, 2, 3, 4]
//     return (
//         < > 
//             <header dir='rtl'>
//                 <NewHeader />
//             </header>
//             <main>
//                 <div className="container mx-auto px-4 py-10 bg-white">
//                     <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">

//                         {/* بخش متن */}
//                         <div style={styles.textContainer}>
//                             <h2 style={styles.title}>
//                                 درباره سایت<span style={styles.highlighted}> صنایع دستی </span>بیشتر بدانید . . .
//                             </h2>
//                             <p style={styles.paragraph}>
//                                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
//                             </p>
//                             <button className="bg-yellow-400 text-white px-6 py-2 rounded transition hover:bg-white hover:text-gray-800 border border-transparent hover:border-yellow-400 mt-4">
//                                 مشاهده فروشگاه
//                             </button>
//                             <button className="bg-yellow-400 text-white px-6 py-2 rounded transition hover:bg-white hover:text-gray-800 border border-transparent hover:border-yellow-400 mt-4 ml-6">
//                                 تماس با ما
//                             </button>
//                         </div>

//                         {/* بخش تصویر */}
//                         <div style={styles.imageContainer}>
//                             <img
//                                 src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/contact-hero-img.jpg "
//                                 alt="icon"
//                                 style={styles.image}
//                             />
//                         </div>


//                     </div>
//                     <div className='flex  lg:gap-7 flex-wrap lg:justify-between py-[4.5rem]'>

//                         {
//                             <div className='flex flex-wrap md:justify-between w-full  gap-[5.5rem] justify-center pt-[4.5rem]'>
//                                 {
//                                     test.map((item, index) => (
//                                         <div key={index} className='flex items-center justify-center relative w-44 h-44'>
//                                             <div className='w-44 h-44 rounded-2xl rotate-[45deg] bg-[#FFCF2F]'></div>

//                                             <div className='w-44 h-44 absolute top-0 rounded-2xl rotate-[59deg] bg-[#F9F9F9]'>
//                                                 <div className='absolute rotate-[-59deg] flex flex-col items-center justify-center w-[176px] h-[176px] text-center'>
//                                                     <span className='text-lg font-semibold'>
//                                                        {a}
//                                                     </span>
//                                                     <span className='text-sm'>
//                                                         محصول متنوع
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))
//                                 }
//                             </div>

//                         }
//                     </div>
//                     <CommentPepole />
//                 </div>
//             </main>
//             <footer>
//                 <Footer />
//             </footer>
//         </>
//     );
// }

// // استایل‌ها
// const styles = {
//     textContainer: {
//         textAlign: 'right',
//         maxWidth: '600px',
//         paddingRight: '12px',
//         paddingLeft: '12px',
//         fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
//     },
//     title: {
//         fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
//         color: '#000',
//         marginBottom: '20px',
//     },
//     highlighted: {
//         color: '#4461e4',
//     },
//     paragraph: {
//         fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
//         lineHeight: '1.6',
//         marginBottom: '20px',
//     },
//     imageContainer: {
//         textAlign: 'center',
//         width: '100%',
//         maxWidth: '550px',
//     },
//     image: {
//         width: '100%',
//         height: 'auto',
//     }
// };

// export default About;

// import React, { useState, useEffect } from 'react';
// import CommentPepole from './comment-pepole';
// import NewHeader from './NewHeader';
// import Footer from './Footer';
// import LassNews from './lastnews';

// function About() {
//     const [a, setA] = useState(0);

//     useEffect(() => {
//         let current = 0;
//         const target = 3000; // You can change this to any number you want
//         const interval = setInterval(() => {
//             current++;
//             setA(current);
//             if (current >= target) clearInterval(interval);
//         }, 0.01); // speed of count up

//         return () => clearInterval(interval);
//     }, []);

//     const test = [1, 2, 3, 4];

//     return (
//         <>
//             <div dir='rtl'>
//                 <header >
//                     <NewHeader />
//                 </header>
//                 <main>
//                     <div className="container mx-auto px-4 py-10 bg-white">
//                         <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">

//                             {/* Text Section */}
//                             <div style={styles.textContainer}>
//                                 <h2 style={styles.title}>
//                                     درباره سایت<span style={styles.highlighted}> صنایع دستی </span>بیشتر بدانید . . .
//                                 </h2>
//                                 <p style={styles.paragraph}>
//                                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...
//                                 </p>
//                                 <button className="bg-yellow-400 text-white px-6 py-2 rounded transition hover:bg-white hover:text-gray-800 border border-transparent hover:border-yellow-400 mt-4">
//                                     مشاهده فروشگاه
//                                 </button>
//                                 <button className="bg-yellow-400 text-white px-6 py-2 rounded transition hover:bg-white hover:text-gray-800 border border-transparent hover:border-yellow-400 mt-4 ml-6">
//                                     تماس با ما
//                                 </button>
//                             </div>

//                             {/* Image Section */}
//                             <div style={styles.imageContainer}>
//                                 <img
//                                     src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/contact-hero-img.jpg"
//                                     alt="icon"
//                                     style={styles.image}
//                                 />
//                             </div>
//                         </div>

//                         {/* Animated Counters */}
//                         <div className='flex lg:gap-7 flex-wrap lg:justify-between py-[4.5rem]'>
//                             <div className='flex flex-wrap md:justify-between w-full gap-[5.5rem] justify-center pt-[4.5rem]'>
//                                 {test.map((item, index) => (
//                                     <div key={index} className='flex items-center justify-center relative w-44 h-44'>
//                                         <div className='w-44 h-44 rounded-2xl rotate-[45deg] bg-[#FFCF2F]'></div>
//                                         <div className='w-44 h-44 absolute top-0 rounded-2xl rotate-[59deg] bg-[#F9F9F9]'>
//                                             <div className='absolute rotate-[-59deg] flex flex-col items-center justify-center w-[176px] h-[176px] text-center'>
//                                                 <span className='text-lg font-semibold'>
//                                                     {a}
//                                                 </span>
//                                                 <span className='text-sm'>
//                                                     محصول متنوع
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <CommentPepole />
//                         <LassNews />
//                     </div>
//                 </main>
//                 <footer>
//                     <Footer />
//                 </footer>
//             </div>
//         </>
//     );
// }

// // Inline styles
// const styles = {
//     textContainer: {
//         textAlign: 'right',
//         maxWidth: '600px',
//         paddingRight: '12px',
//         paddingLeft: '12px',
//         fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
//     },
//     title: {
//         fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
//         color: '#000',
//         marginBottom: '20px',
//     },
//     highlighted: {
//         color: '#4461e4',
//     },
//     paragraph: {
//         fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
//         lineHeight: '1.6',
//         marginBottom: '20px',
//     },
//     imageContainer: {
//         textAlign: 'center',
//         width: '100%',
//         maxWidth: '550px',
//     },
//     image: {
//         width: '100%',
//         height: 'auto',
//     }
// };

// export default About;


import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CommentPepole from './comment-pepole';
import NewHeader from './NewHeader';
import Footer from './Footer';
import LassNews from './lastnews';

function About() {
    const [a, setA] = useState(0);

    useEffect(() => {
        let current = 0;
        const target = 3000;
        const interval = setInterval(() => {
            current += 50; // smoother + faster
            setA(current > target ? target : current);
            if (current >= target) clearInterval(interval);
        }, 30); // 30ms frame

        return () => clearInterval(interval);
    }, []);

    const test = [1, 2, 3, 4];

    return (
        <>
            {/* ✅ SEO Meta Tags */}
            <Helmet>
                <title>درباره ما | فروشگاه صنایع دستی</title>
                <meta
                    name="description"
                    content="با فروشگاه صنایع دستی بیشتر آشنا شوید. ارائه بهترین محصولات دست‌ساز ایرانی با کیفیت عالی و طراحی منحصر به‌فرد."
                />
                <meta name="keywords" content="صنایع دستی, فروشگاه, درباره ما, محصولات دست‌ساز, هنر ایرانی" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="درباره ما | فروشگاه صنایع دستی" />
                <meta property="og:description" content="معرفی فروشگاه صنایع دستی و ماموریت ما در ارائه هنر ایرانی به جهان." />
                <meta property="og:image" content="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/contact-hero-img.jpg" />
            </Helmet>

            <div dir='rtl'>
                <header>
                    <NewHeader />
                </header>

                <main>
                    <div className="container mx-auto px-4 py-10 bg-white">
                        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-8" aria-label="معرفی فروشگاه">
                            <div style={styles.textContainer}>
                                <h1 style={styles.title}>
                                    درباره <span style={styles.highlighted}>فروشگاه صنایع دستی</span>
                                </h1>
                                <p style={styles.paragraph}>
                                    فروشگاه ما با هدف ترویج فرهنگ و هنر ایرانی، محصولات دست‌ساز با کیفیت عالی ارائه می‌دهد...
                                </p>
                                <div className="mt-4">
                                    <a href="/shop" className="bg-yellow-400 text-white px-6 py-2 rounded transition hover:bg-white hover:text-gray-800 border border-transparent hover:border-yellow-400">
                                        مشاهده فروشگاه
                                    </a>
                                    <a href="/content" className="bg-yellow-400 text-white px-6 py-2 rounded transition hover:bg-white hover:text-gray-800 border border-transparent hover:border-yellow-400 ml-6">
                                        تماس با ما
                                    </a>
                                </div>
                            </div>

                            <div style={styles.imageContainer}>
                                <img
                                    src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/contact-hero-img.jpg"
                                    alt="تصویری از هنر صنایع دستی ایرانی"
                                    style={styles.image}
                                />
                            </div>
                        </section>

                        <section className='flex flex-wrap justify-center lg:gap-7 py-[4.5rem]' aria-label="آمار فروشگاه">
                            <div className='flex flex-wrap md:justify-between w-full gap-[5.5rem] justify-center pt-[4.5rem]'>
                                {test.map((item, index) => (
                                    <div key={index} className='flex items-center justify-center relative w-44 h-44'>
                                        <div className='w-44 h-44 rounded-2xl rotate-[45deg] bg-[#FFCF2F]'></div>
                                        <div className='w-44 h-44 absolute top-0 rounded-2xl rotate-[59deg] bg-[#F9F9F9]'>
                                            <div className='absolute rotate-[-59deg] flex flex-col items-center justify-center w-[176px] h-[176px] text-center'>
                                                <span className='text-lg font-semibold'>{a}</span>
                                                <span className='text-sm'>محصول متنوع</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <CommentPepole />
                        <LassNews />
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

// Inline styles
const styles = {
    textContainer: {
        textAlign: 'right',
        maxWidth: '600px',
        paddingRight: '12px',
        paddingLeft: '12px',
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    },
    title: {
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color: '#000',
        marginBottom: '20px',
    },
    highlighted: {
        color: '#4461e4',
    },
    paragraph: {
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    imageContainer: {
        textAlign: 'center',
        width: '100%',
        maxWidth: '550px',
    },
    image: {
        width: '100%',
        height: 'auto',
    }
};

export default About;
