import Shop from "../assets/icons/shop.svg";

export default function Product(props) {
   const isFree = props.price === 0;

   return (
      <div className="w-full bg-box rounded-2xl h-84 flex flex-col justify-between">
         <div className="px-4 py-4 flex justify-center">
            <img
               className="object-contain max-h-50"
               src={props.src}
               alt={props.name || "product"}
            />
         </div>
         <div className="flex flex-col p-3 gap-6">
            <span className="text-lg text-zinc-600">{props.name}</span>
            <div className="flex items-center justify-between">
               <div className="flex flex-row-reverse gap-1 text-sm text-zinc-500">
                  {isFree ? (
                     <span className="text-green-600 font-semibold">
                        رایگان
                     </span>
                  ) : (
                     <>
                        <span>تومان</span>
                        <span>{props.price}</span>
                     </>
                  )}
               </div>
               <div className="flex items-center justify-between w-[65px] h-[23px] p-[2px] bg-[#bcdbc9] rounded-[4px]">
                  <span className="text-[10px]">افزودن به</span>
                  <img
                     className="w-[12px] "
                     src={Shop}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
