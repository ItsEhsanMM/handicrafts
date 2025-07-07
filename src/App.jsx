import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import LassNews from "./components/lastnews";
import Newproduct from "./components/newproduct";
import Join from "./components/join";
import Pupiuler from "./components/pupiuler";
import Ghaly from "./components/ghaly";

function App() {
   return (
      <div
         className="font-yekan custom-container flex flex-col gap-[2.5rem]"
         dir="rtl"
      >
         <Header />
         <MobileNav />
         <Hero />
         <Ghaly />
         <Pupiuler />
         <Join />
         <Newproduct />
         <LassNews />
         <Footer />

      </div>
   );
}

export default App;
