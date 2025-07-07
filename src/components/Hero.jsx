import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";

const info = [
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و",
   },
];

const Hero = () => {
   return (
      <div className="relative">
         <Swiper
            spaceBetween={50}
            navigation={{
               nextEl: ".next-el",
               prevEl: ".prev-el",
            }}
            modules={[Navigation]}
            className="h-84"
         >
            {info.map((item) => (
               <SwiperSlide>
                  <div className="border bg-box rounded-xl flex flex-col h-full justify-between py-15 items-center px-5 text-center">
                     <h2 className="text-lg">{item.title}</h2>
                     <p className="text-[14px] px-5">{item.description}</p>
                     <Link
                        className="bg-primary text-text hover:bg-secondary transition-colors py-2 px-4 rounded-xl"
                        to={"/"}
                     >
                        مشاهده فروشگاه
                     </Link>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <button className="prev-el absolute top-1/2 right-0 z-10">
            <img
               src="/src/assets/icons/prev-el.svg"
               alt="prev"
            />
         </button>

         <button className="next-el absolute top-1/2 left-0 z-10">
            <img
               src="/src/assets/icons/next-el.svg"
               alt="next"
            />
         </button>
      </div>
   );
};
export default Hero;
