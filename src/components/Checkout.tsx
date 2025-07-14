import { findItems } from "../lib/utils";
import { useCartStore } from "../stores/useCartStore";

export default function Checkout() {
   const items = useCartStore((state) => state.items);
   const ids = items.map((item) => item.id);
   const products = findItems(ids);
   return (
      <main>
         <div className="flex justify-between flex-row-reverse py-[5.5rem]">
            <div className="w-[505px] bg-[#F9F9F9] border-[0.5px] text-zinc-500 p-[1.5rem] flex flex-col gap-[1.5rem] h-[241px] rounded-[12px] ">
               <span>جمع کل سبد خرید</span>
               <div>
                  <div className="border-b-2 flex py-[0.5rem]  justify-between items-center">
                     <span>جمع جز</span>
                     <span>458,000 تومان</span>
                  </div>
                  <div className="flex justify-between py-[0.5rem] items-center">
                     <span>جمع جز</span>
                     <span>458,000 تومان</span>
                  </div>
               </div>
               <button className="h-[55px] rounded-[12px]  hover:bg-zinc-600 bg-[#00A693] text-amber-50">
                  ادامه جعت تسویه حساب
               </button>
            </div>
            <div className="w-[767px] flex flex-col gap-[2.5rem]">
               <div className="w-[100%] flex flex-col gap-[.5rem] p-[2.5rem] rounded-[12px] bg-background border-[0.5px]">
                  {products.length !== 0 &&
                     products.map((product) => (
                        <div className="flex items-center h-15 justify-between">
                           <div className="w-1/4 flex justify-between">
                              <button>x</button>
                              <img
                                 className="size-15"
                                 src={product.src}
                                 alt={product.name}
                              />
                           </div>
                           <div className="flex gap-x-12 items-center">
                              <span>{product.name}</span>
                              <span>{product.price}</span>
                           </div>
                           <input
                              className="bg-background  border-[1px] rounded-lg"
                              type="number"
                              value={1}
                              name=""
                              id=""
                           />
                           <span>
                              {product.price === 0 ? "رایگان" : product.price}
                           </span>
                        </div>
                     ))}
               </div>
               <div className="h-[82px] flex items-center justify-between p-[1.5rem] rounded-[12px] bg-[#F9F9F9] border-[0.5px]">
                  <input
                     className="w-[446px] h-[45px] rounded-[9px] pr-[1.5rem] border-[0.5px] border-zinc-500 outline-[0]"
                     placeholder="کد تخفیف"
                     type="text"
                     name=""
                     id=""
                  />
                  <button className="h-[44px] w-[229px]  bg-[#00A693] rounded-[9px] text-[#ffff]">
                     اعمال کد تخفیف
                  </button>
               </div>
            </div>
         </div>
      </main>
   );
}
