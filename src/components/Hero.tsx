import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";
import { Button } from "./ui/button";

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
                  <div className="border relative rounded-xl flex flex-col h-full justify-between py-15 items-center px-5 text-center">
                     <div className="absolute size-full">
                        <img
                           src=""
                           alt=""
                        />
                     </div>
                     <h2 className="text-[clamp(18px,5vw,25px)]">
                        {item.title}
                     </h2>
                     <p className="text-[14px] px-5">{item.description}</p>
                     <Link
                        className="bg-primary text-text hover:bg-secondary transition-colors py-2 px-4 rounded-xl"
                        to={"/shop"}
                     >
                        مشاهده فروشگاه
                     </Link>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <Button className="prev-el absolute top-1/2 right-0 z-10">
            <img
               src="/src/assets/icons/prev-el.svg"
               alt="prev"
            />
         </Button>

         <Button className="next-el absolute top-1/2 left-0 z-10">
            <img
               src="/src/assets/icons/next-el.svg"
               alt="next"
            />
         </Button>
      </div>
   );
};
export default Hero;
