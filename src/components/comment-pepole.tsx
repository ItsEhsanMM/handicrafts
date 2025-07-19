import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CommentPepole() {
   let test2 = [1, 2, 3, 4];

   return (
      <div
         className="flex flex-col items-start px-4"
         dir="rtl"
      >
         {/* باکس بالایی (عنوان) */}
         <div className="bg-[#4D1] w-full max-w-[630px] h-auto flex flex-col items-end p-5 rounded-3xl text-right">
            <div className="text-right w-full">
               <span className="font-bold text-lg block mb-2">
                  نظرات مشتریان ما
               </span>
            </div>
            <span className="text-sm leading-relaxed">
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
               استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
               در ستون و سطرآنچنان که لازم است.
            </span>
         </div>

         {/* اسلایدر */}
         <div className="mt-6 py-[2.5rem] w-full">
            <Swiper
               spaceBetween={20}
               breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
               }}
               dir="rtl"
            >
               {/* ---- اسلاید اول ---- */}
               {test2.map((test) => (
                  <SwiperSlide>
                     <div
                        className="w-full max-w-[350px] h-auto p-4 relative rounded-2xl bg-white shadow-md text-right"
                        dir="rtl"
                     >
                        <span className="block text-sm leading-relaxed text-gray-700">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                           چاپ و با استفاده از طراحان گرافیک است، چاپگرها لورم
                           ایپسوم متن ساختگی در صنعت می‌باشد.
                        </span>

                        {/* آیکن نقل‌قول زیر متن */}

                        {/* اطلاعات کاربر */}
                        <div className="flex items-center gap-3 mt-4">
                           <img
                              className="w-12 h-12 rounded-full object-cover"
                              src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/user-avatar2.jpg"
                              alt="آواتار کاربر"
                           />
                           <div className="flex flex-col text-right">
                              <span className="font-semibold text-sm">
                                 فرزانه احمدی
                              </span>
                              <span className="text-xs text-gray-500">یزد</span>
                           </div>
                           <div className="flex justify-end mr-40">
                              <img
                                 className="w-6 h-6 opacity-30"
                                 src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/quote-up.svg"
                                 alt="نقل‌قول"
                              />
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
