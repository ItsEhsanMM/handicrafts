export default function Carpet() {
   return (
      <div className="flex flex-col bg-box space-y-5 md:flex-row-reverse items-center">
         <div className="min-w-48 p-8 md:p-0">
            <img
               src="https://presite.ir/Handicrafts/wp-content/uploads/2023/07/carpet-main-img-1.png"
               alt="carpet"
            />
         </div>
         <div className=" space-y-8">
            <div className="px-5 text-center md:text-start">
               <span className="text-justify text-[clamp(16px,3vw,100px)] font-bold">
                  با قالی دستباف ایــرانی، هنر اصیل ایرانی را مهمان خانه خود
                  کنید.
               </span>
            </div>
            <div className="flex items-center justify-between px-2 md:justify-start md:gap-x-8">
               <span className="text-[clamp(18px,3vw,100px)]">
                  همین حالا خرید کنید...
               </span>
               <div className="bg-secondary rounded-2xl py-2 px-4">
                  <span className="text-[clamp(12px,1.5vw,50px)]">
                     مشاهده فروشگاه
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
