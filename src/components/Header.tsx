import { useMobileNav } from "../stores/useMobileNav";
import menu from "../assets/icons/menu.svg";
import user from "../assets/icons/user.svg";
import shop from "../assets/icons/shop.svg";
import Navbar from "./shared/Navbar";
import SearchInput from "./shared/SearchInput";
import { Link } from "react-router";
import { Button } from "./ui/button";

const Header = () => {
   const { toggle } = useMobileNav();

   return (
      <header className="space-y-5">
         <div className="pt-5 flex items-center justify-between">
            <Button
               className="block bg-transparent md:hidden"
               onClick={toggle}
            >
               <img
                  src={menu}
                  alt="menu"
               />
            </Button>
            <Link to={"/"}>
               <img
                  src="/Logo.svg"
                  alt="logo"
               />
            </Link>

            <Navbar />

            <div className="flex items-center gap-x-4">
               <div className="hidden lg:block w-sm">
                  <SearchInput />
               </div>
               <Link
                  to="my-account"
                  className="cursor-pointer"
               >
                  <img
                     src={user}
                     alt="account"
                  />
               </Link>
               <Link
                  to={"/checkout"}
                  className="cursor-pointer"
               >
                  <img
                     src={shop}
                     alt="shop"
                  />
               </Link>
            </div>
         </div>
         <div className="w-full h-px bg-gray-300" />
      </header>
   );
};

export default Header;
