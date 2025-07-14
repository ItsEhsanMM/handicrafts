import star from "../assets/icons/star.svg";

export default function Title({ title }) {
   return (
      <>
         <div className="flex justify-between items-center px-2">
            <div className="flex gap-x-2">
               <img
                  src={star}
                  alt="star"
               />
               <span className="text-[clamp(14px,3vw,25px)] font-semibold">
                  {title}
               </span>
            </div>
            <div className="bg-background rounded-2xl py-4 px-2">
               <button className="text-text text-[clamp(14px,3vw,18px)]">
                  مشاهده همه
               </button>
            </div>
         </div>
      </>
   );
}
