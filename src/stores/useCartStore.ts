import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


type CartItem = {
   id: number;
   price:number;
   quantity: number;
   name:string;
   src:string
};

type CartState = {
   items: CartItem[];
   addItem: (item: CartItem) => void;
   removeItem: (id: number) => void;
   clearCart: () => void;
};

export const useCartStore = create<CartState>()(
   persist(
      (set, get) => ({
         items: [],
         addItem: (item) => {
            const items = get().items;
            const existing = items.find((i) => i.id === item.id);
            if (existing) {
               set({
                  items: items.map((i) =>
                     i.id === item.id
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                  ),
               });
            } else {
               set({ items: [...items, item] });
            }
         },
         removeItem: (id) =>
            set((state) => ({
               items: state.items.filter((item) => item.id !== id),
            })),
         clearCart: () => set({ items: [] }),
      }),
      {
         name: "cart-storage", // this is the localStorage key
         storage: createJSONStorage(() => localStorage),
      }
   )
);
