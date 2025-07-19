import { useParams, Link } from "react-router";
import { imgs } from "../lib/const";
import NewProduct from "./newproduct";
import tick from "../assets/icons/tick.svg";
import { Button } from "./ui/button";

const products = imgs;

export default function ProductDetail() {
   const obj = [
      {
         id: 1,
         title: " ارسال توسط فروشگاه",
         iconPath: "/src/assets/icons/delivery.svg",
      },
      {
         id: 2,
         title: "گارانتی اصالت و سلامت فیزیکی کالا",
         iconPath: "/src/assets/icons/guarantee.svg",
      },
      {
         id: 3,
         title: "ضمانت تعویض کالا",
         iconPath: "/src/assets/icons/exchange.svg",
      },
      {
         id: 4,
         title: "هزینه حمل به عهده خریدار",
         iconPath: "/src/assets/icons/delivery-cost.svg",
      },
   ];
   const { id } = useParams();
   const product = products.find((p) => p.id === parseInt(id as string));

   if (!product) return <p className="text-center mt-20">محصول یافت نشد ❌</p>;

   return (
      <main className="flex flex-col space-y-10 max-w-screen-xl mx-auto">
         {/* Breadcrumb */}
         <div className="h-auto bg-primary rounded-xl flex items-center p-4 text-sm sm:text-base overflow-x-auto whitespace-nowrap">
            <div className="flex gap-2 text-white">
               <Link to="/">خانه</Link>
               <span>/</span>
               <Link to="/shop">صنایع دستی چوبی</Link>
               <span>/</span>
               <span>{product.name}</span>
            </div>
         </div>

         {/* Main Product Section */}
         <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center w-full lg:w-1/3">
               <img
                  src={product.src}
                  alt={product.name}
                  className="w-full max-w-xs sm:max-w-md"
               />
            </div>

            {/* Product Details */}
            <div className="flex flex-col lg:flex-row w-full gap-6 rounded-2xl bg-box p-4">
               {/* Product Title and Description */}
               <div className="flex flex-col w-full gap-y-5">
                  <h3 className="text-primary text-lg font-semibold">
                     {product.name}
                  </h3>
                  <div className="w-full bg-black h-[1px]" />
                  <div className="pt-4 flex flex-col gap-2">
                     <p className="text-primary text-base font-bold">
                        توضیحات محصول
                     </p>
                     <ul className="list-disc pr-6 text-sm text-gray-700 leading-relaxed">
                        {obj.map((item) => (
                           <li key={item.id}>{item.title}</li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Seller Info */}
               <div className="flex flex-col w-full lg:w-1/2 gap-4 bg-box rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-white pb-3">
                     <img
                        className="w-4 h-4"
                        src={tick}
                        alt="tick"
                     />
                     <span className="text-primary font-medium">طراح سایت</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     {obj.map((item) => (
                        <div
                           key={item.id}
                           className="flex items-center gap-2"
                        >
                           <img
                              className="w-5 h-5"
                              src={item.iconPath}
                              alt={item.title}
                           />
                           <span className="text-xs text-text">
                              {item.title}
                           </span>
                        </div>
                     ))}
                  </div>
                  <div className="pt-4">
                     <div className="flex justify-between items-center text-lg font-bold mb-2">
                        {product.price}
                     </div>
                     <Button className="w-full py-2 rounded-xl bg-primary text-white text-sm font-medium">
                        افزودن به سبد خرید
                     </Button>
                  </div>
               </div>
            </div>
         </div>

         {/* Description / Comments */}
         <div className="rounded-2xl bg-box p-4 space-y-6">
            <div className="border-b-2 pb-2 flex gap-4 text-sm sm:text-base">
               <span className="cursor-pointer text-primary">توضیحات</span>
               <span className="cursor-pointer">نظرات (0)</span>
            </div>
            <div className="text-justify text-zinc-600 leading-relaxed text-sm sm:text-base">
               توضیحات لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
               {/* Truncated for brevity, you can paste the full paragraph here. */}
            </div>
         </div>

         {/* New Products */}
         <NewProduct />
      </main>
   );
}
