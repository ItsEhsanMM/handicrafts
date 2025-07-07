import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { footer } from "../lib/const";

export default function Footer() {
   return (
      <footer className="bg-green-300 rounded-[25px] px-6 py-10">
         {/* Top Section */}
         <div className="flex flex-col lg:flex-row lg:justify-between lg:pl-20 gap-10 border-b-4 border-indigo-500 pb-10">
            {/* Brand and Description */}
            <div className="flex flex-col gap-4 max-w-xl">
               <div className="flex items-center gap-4">
                  <img
                     className="w-[55px] h-[55px]"
                     src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/footer-logo.svg"
                     alt="لوگو"
                  />
                  <span className="text-xl font-bold">فروشگاه صنایع دستی</span>
               </div>
               <p className="text-xs text-justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
               </p>

               {/* Enamad Section */}
               <div className="flex items-center justify-between gap-4 mt-4">
                  <div className="flex flex-col text-sm gap-2 max-w-xs">
                     <h2 className="font-bold text-sm">
                        نماد اعتماد الکترونیک
                     </h2>
                     <span className="text-xs">
                        لورم ایپسوم متن ساختگی با تولید سادگی صنعت چاپ است.
                     </span>
                  </div>
                  <div className="flex gap-4">
                     <div className="size-[clamp(50px,5vw,150px)] rounded-md flex items-center justify-center bg-amber-400">
                        <span className="text-xs">مجوز</span>
                     </div>
                     <div className="size-[clamp(50px,5vw,150px)] rounded-md flex items-center justify-center bg-amber-400">
                        <span className="text-xs">مجوز</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer Menu Columns */}
            <div className="flex gap-x-5 md:gap-x-15 justify-center lg:justify-end">
               {footer.map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col gap-4 "
                  >
                     <h2 className="text-[clamp(12px,3vw,18px)] font-bold">
                        {item.title}
                     </h2>
                     <ul className="space-y-3 text-[clamp(8px,3vw,14px)]">
                        {item.subtitle.map((link, idx) => (
                           <li
                              key={idx}
                              className="cursor-pointer hover:underline"
                           >
                              {link.text}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Bottom Section */}
         <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm pt-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
               <div className="flex flex-col gap-y-2">
                  {/* Address */}
                  <div className="flex items-center gap-2">
                     <FaLocationDot className="text-lg" />
                     <h3 className="font-bold">آدرس ما:</h3>
                  </div>
                  <span>تهران، ولیعصر، کوچه طراحان سایت، پلاک 15، طبقه 2</span>
               </div>

               <div className="flex flex-col gap-y-2">
                  {/* Phone */}
                  <div className="flex items-center gap-x-2">
                     <FaPhone className="text-lg" />
                     <h3 className="font-bold">شماره تماس:</h3>
                  </div>
                  <span>021-12345678</span>
               </div>
            </div>
            {/* Copyright */}
            <div className="text-center pt-2">
               تمامی حقوق متعلق به فروشگاه صنایع دستی می‌باشد ©
            </div>
         </div>
      </footer>
   );
}
