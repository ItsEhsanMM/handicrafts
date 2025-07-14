import { Link, useLocation } from "react-router";
/* eslint-disable-next-line no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import Close from "../../assets/icons/close.svg";
import { linkHeader } from "../../lib/const";
import { useMobileNav } from "../../stores/useMobileNav";
import SearchInput from "./SearchInput";

const overlayVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 0.5 },
   exit: { opacity: 0 },
};

const menuVariants = {
   hidden: { x: "100%" }, // Start offscreen to the right
   visible: { x: 0 },
   exit: { x: "100%" },
};

const MobileNav = () => {
   const path = useLocation();
   const { isOpen, close } = useMobileNav();

   return (
      <AnimatePresence>
         {isOpen && (
            <>
               {/* Overlay */}
               <motion.div
                  className="fixed inset-0 bg-black z-40"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={close}
               />

               {/* RTL Mobile Menu */}
               <motion.nav
                  dir="rtl"
                  className="fixed top-0 right-0 h-screen w-4/5 bg-box z-50"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.3 }}
               >
                  <div className="pt-14 px-4 relative flex flex-col gap-y-5 h-full">
                     {/* Close Button (placed on the right in RTL) */}
                     <img
                        src={Close}
                        alt="close"
                        className="absolute left-3 top-3 size-8 cursor-pointer"
                        onClick={close}
                     />

                     <Link
                        to="/"
                        className="flex justify-center"
                        onClick={close}
                     >
                        <img
                           src="/Logo.svg"
                           alt="logo"
                        />
                     </Link>

                     <SearchInput />

                     <div className="flex flex-col gap-y-[15px] px-5">
                        {linkHeader.map((item) => (
                           <Link
                              to={item.linkTo}
                              key={item.linkTo}
                              onClick={close}
                              className={`${
                                 path.pathname === item.linkTo
                                    ? "text-primary"
                                    : "text-text"
                              } font-medium`}
                           >
                              {item.title}
                           </Link>
                        ))}
                     </div>
                  </div>
               </motion.nav>
            </>
         )}
      </AnimatePresence>
   );
};

export default MobileNav;
