import { Link } from "react-router";
import { useCartStore } from "../stores/useCartStore";

export default function Checkout() {
   const items = useCartStore((state) => state.items);
   const removeItem = useCartStore((state) => state.removeItem);

   if (!items.length) {
      return (
         <div className="w-full min-h-60 flex flex-col items-center justify-evenly">
            <h1 className="text-[clamp(25px,5vw,40px)] font-bold">
               سبد خرید خالی می باشد !
            </h1>
            <Link
               to={"/shop"}
               className="bg-primary rounded-lg px-4 py-2 cursor-pointer"
            >
               بازگشت به فروشگاه
            </Link>
         </div>
      );
   }

   return (
      <main className="px-4 py-10">
         <div className="flex flex-col-reverse gap-6 lg:flex-row-reverse lg:justify-between">
            {/* Cart Summary */}
            <div className="w-full h-fit lg:w-[505px] bg-background border border-gray-300 text-zinc-500 p-6 flex flex-col gap-6 rounded-xl">
               <span>جمع کل سبد خرید</span>
               <div className="flex gap-2 items-center">
                  <span>
                     {items
                        .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                        .toLocaleString()}
                  </span>
                  تومان
               </div>
               <button className="h-[55px] rounded-[12px] bg-primary hover:bg-zinc-600 text-amber-50">
                  ادامه جهت تسویه حساب
               </button>
            </div>

            {/* Cart Items + Coupon */}
            <div className="w-full flex flex-col gap-10">
               {/* Cart Items */}
               <div className="w-full flex flex-col gap-2 p-6 rounded-[12px] bg-background border border-gray-300">
                  {items.length > 0 && (
                     <div className="hidden sm:grid grid-cols-12 text-sm text-gray-500 font-semibold pb-2 border-b border-gray-300">
                        <span className="col-span-3">محصول</span>
                        <span className="col-span-3 text-center">
                           قیمت واحد
                        </span>
                        <span className="col-span-3 text-center">تعداد</span>
                        <span className="col-span-3 text-center">قیمت کل</span>
                     </div>
                  )}

                  {items.map((product) => (
                     <div
                        key={product.id}
                        className="flex flex-col sm:grid sm:grid-cols-12 sm:items-center justify-between gap-4 py-4 border-b last:border-none"
                     >
                        {/* Product Info (Image + Name + Remove Button) */}
                        <div className="flex items-center gap-4 col-span-3">
                           <button
                              className="text-xl text-red-500"
                              onClick={() => removeItem(product.id)}
                           >
                              ×
                           </button>
                           <img
                              className="w-14 h-14 object-cover rounded"
                              src={product.src}
                              alt={product.name}
                           />
                           <span className="sm:hidden text-sm font-medium">
                              {product.name}
                           </span>
                        </div>

                        {/* Desktop Name */}
                        <span className="hidden sm:block col-span-3 text-sm">
                           {product.name}
                        </span>

                        {/* Unit Price */}
                        <div className="flex justify-between sm:block col-span-2 text-sm">
                           <span className="text-gray-500 sm:hidden">
                              قیمت واحد:
                           </span>
                           <span className="text-center">
                              {product.price === 0
                                 ? "رایگان"
                                 : product.price.toLocaleString()}
                           </span>
                        </div>

                        {/* Quantity */}
                        <div className="flex justify-between sm:block col-span-2 text-sm">
                           <span className="text-gray-500 sm:hidden">
                              تعداد:
                           </span>
                           <span className="text-center">
                              {product.quantity}
                           </span>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between sm:block col-span-2 text-sm">
                           <span className="text-gray-500 sm:hidden">
                              قیمت کل:
                           </span>
                           <span className="text-center">
                              {product.price === 0
                                 ? "رایگان"
                                 : (
                                      product.price * product.quantity
                                   ).toLocaleString()}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Discount Code */}
               <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-6 rounded-[12px] bg-[#F9F9F9] border border-gray-300">
                  <input
                     className="flex-1 p-2  rounded-lg indent-2 border border-zinc-500 outline-none"
                     placeholder="کد تخفیف"
                     type="text"
                  />
                  <button className="py-2 w-full bg-primary rounded-[9px] text-white">
                     اعمال کد تخفیف
                  </button>
               </div>
            </div>
         </div>
      </main>
   );
}
