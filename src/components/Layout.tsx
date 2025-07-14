import Header from "./Header.js";
import MobileNav from "./shared/MobileNav.js";
import Footer from "./shared/Footer.js";
import { Outlet } from "react-router";

export default function Layout() {
   return (
      <main
         className="font-yekan bg-background flex flex-col space-y-10"
         dir="rtl"
      >
         <div className="custom-container">
            <Header />
            <MobileNav />
            <Outlet />
            <Footer />
         </div>
      </main>
   );
}
