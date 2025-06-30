import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";

const info = [
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
   },
   {
      title: "لذت خرید انلاین صنایع دستی ایرانی",
      description:
         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که",
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
            className="h-96"
         >
            {info.map((item) => (
               <SwiperSlide>
                  <div className="border bg-box rounded-xl flex flex-col gap-y-4 h-full justify-center items-center px-5 text-center">
                     <h2>{item.title}</h2>
                     <p>{item.description}</p>
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
