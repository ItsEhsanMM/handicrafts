import { Link, useLocation } from "react-router";
import { CiHome } from "react-icons/ci";
import { linkHeader } from "../../lib/const";
import { cn } from "../../lib/utils";

export default function Navbar() {
   const location = useLocation();

   return (
      <nav className="hidden md:block">
         <div className="flex flex-wrap items-center gap-6 max-w-full">
            <div className="flex gap-4 items-center text-sm md:text-base">
               {linkHeader.map((item, index) => {
                  const isActive = location.pathname === item.linkTo;
                  return (
                     <Link
                        key={index}
                        to={item.linkTo}
                        className={cn(
                           "flex items-center gap-1 transition-all duration-200",
                           isActive
                              ? "text-blue-600 font-bold"
                              : "text-gray-700 hover:text-yellow-600"
                        )}
                        aria-current={isActive ? "page" : undefined}
                     >
                        <CiHome />
                        <span className="text-[clamp(12px,1.5vw,16px)]">
                           {item.title}
                        </span>
                     </Link>
                  );
               })}
            </div>
         </div>
      </nav>
   );
}
