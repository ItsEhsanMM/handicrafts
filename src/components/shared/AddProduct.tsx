import Shop from "../../assets/icons/shop.svg";
import { useCartStore } from "../../stores/useCartStore";

type Props = {
   id: number;
};

const AddProduct = ({ id }: Props) => {
   const item = useCartStore((state) => state.addItem);
   return (
      <button
         onClick={() =>
            item({
               id,
               quantity: 1,
            })
         }
         className="flex items-center px-4 py-2 gap-x-2 bg-primary rounded-lg cursor-pointer"
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
