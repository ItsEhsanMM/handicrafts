import Header from "./Header.js";
import MobileNav from "./shared/MobileNav.js";
import Footer from "./shared/Footer.js";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export default function Layout() {
   return (
      <main
         className="font-yekan bg-background flex flex-col space-y-10"
         dir="rtl"
      >
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
         <div className="custom-container">
            <Header />
            <MobileNav />
            <Outlet />
            <Footer />
         </div>
      </main>
   );
}
