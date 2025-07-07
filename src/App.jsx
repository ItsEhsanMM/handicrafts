import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";

import Footer from "./components/Footer";
import LassNews from "./components/lastnews";
import Newproduct from "./components/newproduct";
import Join from "./components/join";
import Pupiuler from "./components/pupiuler";
import Carpet from "./components/Carpet";
import Special from "./components/Special";

function App() {
   return (
      <div
         className="font-yekan custom-container bg-background flex flex-col space-y-10"
         dir="rtl"
      >
         <Header />
         <MobileNav />
         <Hero />
         <Special />
         <Carpet />
         {/* <Pupiuler /> */}
         {/* <Join /> */}
         <Newproduct />
         {/* <LassNews /> */}
         {/* <Footer /> */}
      </div>
   );
}

export default App;
