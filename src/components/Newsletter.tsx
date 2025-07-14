import media from "../assets/icons/media-left.svg";
import { Button } from "./ui/button";

export default function Newsletter() {
   return (
      <div className="relative w-full rounded-2xl overflow-hidden bg-secondary">
         <div className="relative z-10 flex flex-col items-center text-center px-4 py-[clamp(2rem,5vw,4rem)]">
            <h2 className="text-white font-bold text-[clamp(1.5rem,4vw,2.5rem)]">
               عضویت در خبرنامه سایت
            </h2>
            <p className="text-white text-[clamp(1rem,2.5vw,1.5rem)] max-w-2xl mt-2 leading-relaxed">
               با عضویت در خبرنامه سایت صنایع دستی، از جدیدترین اخبار و مقالات
               ما اطلاع یابید.
            </p>

            <form className="mt-6 flex w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white rounded-2xl">
               <div className="relative flex-1">
                  <input
                     type="email"
                     placeholder="آدرس ایمیل خود را وارد کنید..."
                     className="w-full h-[clamp(2.5rem,6vw,4rem)] border-none outline-none px-4 text-text"
                  />
               </div>
               <Button
                  type="submit"
                  className="bg-primary flex items-center justify-center rounded-xl px-4 h-[clamp(2.5rem,6vw,4rem)]"
               >
                  <img
                     src={media}
                     alt="media left"
                  />
               </Button>
            </form>
         </div>
      </div>
   );
}
