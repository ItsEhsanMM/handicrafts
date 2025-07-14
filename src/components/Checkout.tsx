import { useCartStore } from "../stores/useCartStore";

export default function Checkout() {
   const items = useCartStore((state) => state.items);
   return (
      <main>
         <div>
            <div className=" border-t-2 border-icon rounded-lg ">
               <div className="h-[155px]  bg-secondary">
                  <div>
                     {items.length === 0 ? (
                        <span>سبد خرید شما خالی می باشد</span>
                     ) : (
                        <span>سبد پر است</span>
                     )}
                  </div>
               </div>
               <div></div>
            </div>
            <div></div>
         </div>
      </main>
   );
}
