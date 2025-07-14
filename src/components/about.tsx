import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CommentPepole from "./comment-pepole";
import LastNews from "./LastNews";
import { Link } from "react-router";

function About() {
   const [a, setA] = useState(0);

   useEffect(() => {
      let current = 0;
      const target = 3000;
      const interval = setInterval(() => {
         current += 50;
         setA(current > target ? target : current);
         if (current >= target) clearInterval(interval);
      }, 30);

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
            <meta
               name="keywords"
               content="صنایع دستی, فروشگاه, درباره ما, محصولات دست‌ساز, هنر ایرانی"
            />
            <meta
               name="robots"
               content="index, follow"
            />
            <meta
               property="og:title"
               content="درباره ما | فروشگاه صنایع دستی"
            />
            <meta
               property="og:description"
               content="معرفی فروشگاه صنایع دستی و ماموریت ما در ارائه هنر ایرانی به جهان."
            />
            <meta
               property="og:image"
               content="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/contact-hero-img.jpg"
            />
         </Helmet>

         <div>
            <main>
               <div className="container mx-auto px-4 py-10 bg-white">
                  {/* معرفی فروشگاه */}
                  <section
                     className="flex flex-col md:flex-row-reverse h-150 items-center justify-between gap-8"
                     aria-label="معرفی فروشگاه"
                  >
                     <div>
                        <h1>
                           درباره <span>فروشگاه صنایع دستی</span>
                        </h1>
                        <p>
                           فروشگاه ما با هدف ترویج فرهنگ و هنر ایرانی، محصولات
                           دست‌ساز با کیفیت عالی ارائه می‌دهد...
                        </p>
                        <div className="flex w-2/3 justify-between">
                           <Link
                              to="/shop"
                              className="bg-secondary px-2 py-1 rounded-lg text-white transition hover:bg-white hover:text-text hover:border-secondary"
                           >
                              <span className="text-xs">مشاهده فروشگاه</span>
                           </Link>
                           <Link
                              to="/content"
                              className="bg-transparent px-2 py-1 rounded-lg text-primary transition hover:bg-white hover:text-text border border-primary hover:border-secondary"
                           >
                              <span className="text-xs">تماس با ما</span>
                           </Link>
                        </div>
                     </div>

                     <div>
                        <img
                           src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/contact-hero-img.jpg"
                           alt="تصویری از هنر صنایع دستی ایرانی"
                        />
                     </div>
                  </section>

                  {/* آمار فروشگاه */}
                  <section
                     className="mb-10"
                     aria-label="آمار فروشگاه"
                  >
                     <div className="grid grid-cols-2 md:grid-cols-4  w-full place-items-center gap-y-18">
                        {test.map((item, index) => (
                           <div
                              key={index}
                              className="flex items-center justify-center relative w-[clamp(120px,12vw,240px)] h-[clamp(120px,12vw,240px)]"
                           >
                              <div className="w-[clamp(120px,12vw,240px)] h-[clamp(120px,12vw,240px)] rounded-2xl rotate-[45deg] bg-secondary"></div>
                              <div className="w-[clamp(120px,12vw,240px)] h-[clamp(120px,12vw,240px)] absolute top-0 rounded-2xl rotate-[59deg] bg-box">
                                 <div className=" rotate-[-59deg] flex flex-col items-center justify-center size-full text-center">
                                    <span className="text-lg font-semibold">
                                       {a}
                                    </span>
                                    <span className="text-sm">محصول متنوع</span>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>

                  {/* نظرات و اخبار */}
                  <CommentPepole />
                  <LastNews />
               </div>
            </main>
         </div>
      </>
   );
}

export default About;
