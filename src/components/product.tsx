import { Link } from "react-router";
import AddProduct from "./shared/AddProduct";

export default function Product(props) {
   const isFree = props.price === 0;

   return (
      <div className="w-full flex flex-col justify-between px-8 bg-box rounded-2xl h-90 hover:-translate-y-2 duration-400 pb-5 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
         <Link to={`/shop/${props.id}`}>
            <div className="flex flex-col justify-between ">
               <div className="px-4 py-4 flex justify-center">
                  <img
                     className="object-contain max-h-50"
                     src={props.src}
                     alt={props.name || "product"}
                  />
               </div>
               <div className="flex flex-col p-3 gap-6">
                  <span className="text-lg text-zinc-600">{props.name}</span>
               </div>
            </div>
         </Link>
         <div className="flex items-center justify-between">
            <div className="flex flex-row-reverse gap-1 text-sm text-zinc-500">
               {isFree ? (
                  <span className="text-green-600 font-semibold">رایگان</span>
               ) : (
                  <>
                     <span>تومان</span>
                     <span>{props.price}</span>
                  </>
               )}
            </div>
            <AddProduct
               id={props.id}
               price={props.price}
               name={props.name}
               src={props.src}
            />
         </div>
      </div>
   );
}
