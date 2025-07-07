import { useMobileNav } from "../stores/useMobileNav";
import menu from "../assets/icons/menu.svg";
import user from "../assets/icons/user.svg";
import shop from "../assets/icons/shop.svg";

const Header = () => {
   const { toggle } = useMobileNav();

   return (
      <>
         <header className="pt-5 flex items-center justify-between">
            <button
               className="block md:hidden"
               onClick={toggle}
            >
               <img
                  src={menu}
                  alt="menu"
               />
            </button>
            <img
               src="/Logo.svg"
               alt="logo"
            />

            <div className="flex items-center gap-x-4">
               <div className="">
                  <img
                     src={user}
                     alt="account"
                  />
               </div>
               <div>
                  <img
                     src={shop}
                     alt="shop"
                  />
               </div>
            </div>
         </header>
         <div className="w-full h-px bg-gray-300" />
      </>
   );
};

export default Header;
