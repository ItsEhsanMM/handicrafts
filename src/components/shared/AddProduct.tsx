import { toast } from "react-toastify";
import Shop from "../../assets/icons/shop.svg";
import { useCartStore } from "../../stores/useCartStore";
import { Button } from "../ui/button";

type Props = {
   id: number;
   price: number;
   name: string;
   src: string;
};

const AddProduct = ({ id, price, name, src }: Props) => {
   const add = useCartStore((state) => state.addItem);

   const notify = (name) => toast.success(name + " به سبد خرید اضاف شد");

   return (
      <Button
         onClick={() => {
            add({
               id,
               name,
               quantity: 1,
               price,
               src,
            });

            notify(name);
         }}
         className="flex items-center px-4 py-2 gap-x-2 text-text bg-primary rounded-lg cursor-pointer"
      >
         <span className="text-sm">افزودن به</span>
         <img
            className="size-4"
            src={Shop}
            alt="add product"
         />
      </Button>
   );
};
export default AddProduct;
