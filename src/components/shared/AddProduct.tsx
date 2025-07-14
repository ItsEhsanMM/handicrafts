import Shop from "../../assets/icons/shop.svg";
import { CartItem, useCartStore } from "../../stores/useCartStore";

const AddProduct = (productId: number) => {
   const item = useCartStore((state) => state.addItem);
   return (
      <button
         onClick={() =>
            item({
               id: productId,
               quantity: 1,
            })
         }
         className="flex items-center px-4 py-2 gap-x-2 bg-primary rounded-lg"
      >
         <span className="text-sm">افزودن به</span>
         <img
            className="size-4"
            src={Shop}
            alt="add product"
         />
      </button>
   );
};
export default AddProduct;
