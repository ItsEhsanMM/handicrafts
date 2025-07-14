import Header from "./Header.jsx";
import MobileNav from "./shared/MobileNav.jsx";
import Footer from "./shared/Footer.jsx";
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
